import calcDateDisplay from './calcDateDisplay';


const addDrawProp = ({ rewards }) => rewards.map(({ dates = [], ...otherProps }) => {
  const dateObjects = dates.map(dateString => calcDateDisplay(dateString));
  const validDates = dateObjects.filter(({ past }) => !past);
  const sortedDates = validDates.sort((a = {}, b = {}) => a.remaining - b.remaining);

  if (sortedDates.length <= 0) {
    return { dates, ...otherProps };
  }

  return { drawn: sortedDates[0], dates, ...otherProps };
});


export default addDrawProp;
