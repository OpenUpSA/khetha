const modifyPercentageIfNeeded = (percentage, error) => {
  if (percentage > 100) {
    return 100;
  }

  if (error) {
    return 0;
  }

  return percentage;
};


export default modifyPercentageIfNeeded;
