const createFilterOption = amounts => (text, index) => {
  const allKeys = Object.keys(amounts);
  const currentKey = allKeys[index];
  const amountNumber = amounts[currentKey];

  return {
    id: index,
    reset: index < 1,
    text: `${text} (${amountNumber})`,
  };
};


export default createFilterOption;
