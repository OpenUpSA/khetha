export default dispatch => props => (response, parser) => {
  const {
    type,
    payload = null,
    meta,
  } = props;

  const promise = new Promise((resolve) => {
    if (parser) {
      dispatch(parser(response));
    } else {
      dispatch({
        type,
        payload,
        meta: {
          ...meta,
          response,
        },
      });
    }

    resolve(response);
  });

  return promise;
};
