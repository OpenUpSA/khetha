const calcOpenState = (open, index, advance, focused) => {
  if (!advance) {
    return open;
  }

  if (focused === index) {
    return true;
  }

  return false;
};


export default calcOpenState;
