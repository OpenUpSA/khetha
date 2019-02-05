import moment from 'moment';


const calcDateDisplay = (dateString) => {
  const remaining = moment(new Date(dateString));
  const nextWeek = moment().add(7, 'days');
  const timestamp = remaining.valueOf();

  return {
    dateString,
    remaining: timestamp,
    text: remaining.fromNow(true),
    past: remaining.valueOf() < moment().valueOf(),
    lessThanWeek: remaining.valueOf() < nextWeek.valueOf(),
  };
};


const addDrawProp = ({ rewards }) => rewards.map(({ dates = [], ...otherProps }) => {
  const dateObjects = dates.map(dateString => calcDateDisplay(dateString));
  const validDates = dateObjects.filter(({ past }) => !past);
  const sortedDates = validDates.sort((a = {}, b = {}) => a.remaining - b.remaining);

  if (sortedDates.length <= 0) {
    return { dates, ...otherProps };
  }

  return { drawn: sortedDates[0], dates, ...otherProps };
});


const applyDateFilter = ({ rewards, dates }) => {
  if (!dates) {
    return rewards;
  }

  const isUpcoming = dates === 'upcoming';
  return rewards.filter(({ drawn }) => !!drawn === isUpcoming);
};


const applyCompletionFilter = ({ rewards, completion, points }) => {
  if (!completion) {
    return rewards;
  }

  const completedCondition = completion === 'completed';

  return rewards.filter(({ points: requiredPoints }) => {
    const completed = requiredPoints <= points;
    return completed === completedCondition;
  });
};


const applySingleFilter = ({ rewards, index }) => {
  if (index !== 0 && !index) {
    return rewards;
  }

  if (rewards.length < index) {
    return null;
  }

  return [rewards[index]];
};


const applyFilters = (props) => {
  const {
    rewards,
    completion,
    dates,
    index,
    points,
  } = props;

  const rewardsWithDrawProp = addDrawProp({ rewards });
  const sortedProps = rewardsWithDrawProp.sort((a, b) => a.points - b.points);

  const withDateApplied = applyDateFilter({ rewards: sortedProps, dates });

  const withCompletionApplied = applyCompletionFilter({
    rewards: withDateApplied,
    completion,
    points,
  });

  const withSingleApplied = applySingleFilter({
    rewards: withCompletionApplied,
    index,
  });

  return withSingleApplied;
};


export default applyFilters;
