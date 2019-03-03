const applySingleFilter = ({ rewards, index }) => {
  if (index !== 0 && !index) {
    return rewards;
  }

  if (rewards.length < index) {
    return null;
  }

  return [rewards[index]];
};


export default applySingleFilter;
