const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const blankArray = length => Array(length).fill(null);


const randomLengthBlankArray = (min, max) => {
  const length = randomNumber(min, max);
  return blankArray(length);
};

const arrayOfNumbers = (min, max, length) => {
  const result = blankArray(length).map(() => randomNumber(min, max));
  return result;
};


export {
  randomNumber,
  blankArray,
  randomLengthBlankArray,
  arrayOfNumbers,
};


export default {
  randomNumber,
  blankArray,
  randomLengthBlankArray,
  arrayOfNumbers,
};
