const difficulty = [
  1,
  2,
  4,
  8,
];


const calcDifficulty = (points) => {
  const compareToPoints = (result, threshold, index) => {
    const value = points >= threshold ? index + 1 : result;
    return value;
  };

  return difficulty.reduce(compareToPoints, null).toString();
};


export default calcDifficulty;
