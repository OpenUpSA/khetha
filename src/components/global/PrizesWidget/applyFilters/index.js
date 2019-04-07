import addDrawProp from './addDrawProp';
import applyCompletionFilter from './applyCompletionFilter';
import applyDateFilter from './applyDateFilter';
import applySingleFilter from './applySingleFilter';


const applyFilters = (props) => {
  const {
    rewards,
    completion,
    date,
    index,
    points,
  } = props;

  const rewardsWithDrawProp = addDrawProp({ rewards });
  const sortedProps = rewardsWithDrawProp.sort((a, b) => a.points - b.points);

  const withDateApplied = applyDateFilter({ rewards: sortedProps, date });

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
