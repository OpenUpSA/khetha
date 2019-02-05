const difficulty = text => ({
  [text.filter.difficulty[1]]: 1,
  [text.filter.difficulty[2]]: 2,
  [text.filter.difficulty[3]]: 4,
  [text.filter.difficulty[4]]: 8,
});

const calcDifficulty = (points, text) => {
  const diffInstance = difficulty(text);
  const keys = Object.keys(diffInstance);
  const values = keys.map(key => diffInstance[key]);

  const compareToPoints = (result, threshold, index) => {
    const value = points >= threshold ? keys[index] : result;
    return value;
  };

  return values.reduce(compareToPoints, null);
};


export default calcDifficulty;
