const { flatten } = require('lodash');


const defs = `
  type NotificationResponse {
    success: Boolean!
    error: String
  }

  extend type Mutation  {
    """
    Documentation pending...
    """
    sendNotification (
      id: String!,
      button: String!
      url: String!,
      title: String!,
      message: String!,
    ): Boolean!
  }
`;


const getSingleUserNotificationKeys = ({ id, firestore }) => firestore
  .collection('users')
  .doc(id)
  .get()
  .then(response => response.data())
  .then(({ jsonString }) => JSON.parse(jsonString))
  .then(({ info }) => info.notification.map(({ value }) => value));


const getUsersNotificationTokens = ({ id, firestore }) => {
  if (id) {
    return getSingleUserNotificationKeys({ id, firestore })
      .then(tokens => ([tokens]));
  }

  const allUsers = firestore
    .collection('users')
    .get()
    .then(response => response.docs.map(doc => doc.data()));

  return allUsers.then(users => users.map((userId) => {
    const promise = getSingleUserNotificationKeys({ id: userId, firestore });
    return promise;
  }));
};


const resolver = ({ messaging, firestore }) => (_, props) => {
  const {
    id,
    button,
    url,
    title,
    message,
  } = props;

  return getUsersNotificationTokens({ id, firestore })
    .then(flatten)
    .then(tokens => tokens.map(token => messaging.send({
      token,
      webpush: {
        notification: {
          title,
          body: message,
          actions: [
            {
              title: button,
              action: url,
            },
          ],
        },
      },
    })))
    .then(Promise.all)
    .then(() => ({
      success: true,
    }));
};


const output = {
  defs,
  resolver,
};


module.exports = output;
