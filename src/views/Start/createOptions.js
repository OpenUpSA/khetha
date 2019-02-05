const createOptions = (innerCallback, text) => [
  {
    text: text.filter.difficulty[0],
    callback: innerCallback,
    reset: true,
  },
  {
    text: text.filter.difficulty[1],
    callback: innerCallback,
  },
  {
    text: text.filter.difficulty[2],
    callback: innerCallback,
  },
  {
    text: text.filter.difficulty[3],
    callback: innerCallback,
  },
  {
    text: text.filter.difficulty[4],
    callback: innerCallback,
  },
];


export default createOptions;
