const createItem = text => (amount, index) => ({
  text: `${text.filter.difficulty[index]} (${amount})`,
  reset: index === 0,
  disabled: amount <= 0,
  id: index,
});


const createOptions = (text, amounts) => amounts.map(createItem(text));


export default createOptions;
