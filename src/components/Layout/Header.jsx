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
        <Next>{`${remainingPoints} points required to unlock next level`}</Next>
      </Text>
    </HeaderMenu>
  );
};


export default Header;


Header.propTypes = {
  points: t.number.isRequired,
};
