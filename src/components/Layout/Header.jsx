import React from 'react';
import t from 'prop-types';


import LevelBadge from '../LevelBadge';
import calcLevelInfo from './calcLevelInfo';
import {
  HeaderMenu,
  Text,
  Level,
  Next,
} from './styled';


const calcIfHighestLevel = (points, remainingPoints) => {
  if (points >= 100) {
    return 'You are currently in the top tier';
  }

  return `${remainingPoints} points required to unlock next level`;
};


const Header = ({ points }) => {
  const {
    level,
    remainingPoints,
  } = calcLevelInfo(points);


  return (
    <HeaderMenu>
      <LevelBadge {...{ points }} />
      <Text>
        <Level>{`${level} Level`}</Level>
        <Next>{calcIfHighestLevel(points, remainingPoints)}</Next>
      </Text>
    </HeaderMenu>
  );
};


export default Header;


Header.propTypes = {
  points: t.number.isRequired,
};
