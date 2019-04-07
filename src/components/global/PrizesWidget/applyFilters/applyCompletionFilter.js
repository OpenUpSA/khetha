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


export default applyCompletionFilter;
