module.exports = {
  initializeApp: value => value,
  firestore: () => ({
    collection: () => ({
      doc: () => ({
        get: () => new Promise(resolve => resolve()),
        set: () => new Promise(resolve => resolve()),
      }),
    }),
  }),
  auth: () => ({
    signInAnonymously: () => new Promise(resolve => resolve()),
  }),
  messaging: value => value,
};
