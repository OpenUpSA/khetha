const applyDateFilter = ({ rewards, date }) => {
  if (!date) {
    return rewards;
  }

  const isUpcoming = date === 'upcoming';
  return rewards.filter(({ drawn }) => !!drawn === isUpcoming);
};


export default applyDateFilter;
