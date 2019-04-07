import calcSummary from './calcSummary';


const createItems = (rewards, userPoints, text) => rewards.map((rewardItem) => {
  const {
    lessThanWeek: highlighted,
    text: nextDraw,
  } = rewardItem.drawn || {};


  const pointsLeft = rewardItem.points - userPoints;
  const progress = userPoints / rewardItem.points * 100;
  const summaryRaw = calcSummary(nextDraw, text, progress, pointsLeft);
  const summary = rewardItem.drawn ? summaryRaw : null;

  return {
    progress,
    highlighted,
    summary,
    title: rewardItem.title,
    content: rewardItem.description,
  };
});


export default createItems;
