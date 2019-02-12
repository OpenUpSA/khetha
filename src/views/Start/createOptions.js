const createItem = (changeFilter, text) => (amount, index) => ({
  text: `${text.filter.difficulty[index]} (${amount})`,
  callback: () => changeFilter(index),
  reset: index === 0,
  disabled: amount <= 0,
});


const createOptions = (changeFilter, text, amounts) => {
  const result = amounts.map(createItem(changeFilter, text));
  return result;
};


export default createOptions;
