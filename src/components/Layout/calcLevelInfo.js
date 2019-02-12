import rewardLevels from '../../config/rewardLevels.json';


const calcLevelInfo = (points) => {
  const iconKeys = Object.keys(rewardLevels);
  const iconValues = iconKeys.map(key => rewardLevels[key]);

  const calcLevel = level => iconKeys.reduce(
    (result, key, index) => (level >= iconValues[index] ? { level: key, index } : result),
    null,
  );

  const { level, index } = calcLevel(points);
  if (index >= iconKeys.length) {
    return {
      level,
      remainingPoints: false,
    };
  }

  const nextPoints = iconKeys.length >= rewardLevels[iconKeys[index + 1]];

  return {
    level,
    remainingPoints: nextPoints - points,
  };
};


export default calcLevelInfo;
