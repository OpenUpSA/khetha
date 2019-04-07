const calcPercentage = ({ progress, incremental }) => {
  if (!incremental && !!progress) {
    return 100;
  }

  if (!incremental && !progress) {
    return 0;
  }

  if (progress <= 0) {
    return 1;
  }

  if (progress > 100) {
    return 100;
  }

  return Math.floor(progress);
};


export default calcPercentage;
