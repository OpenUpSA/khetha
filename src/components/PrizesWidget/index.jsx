import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import applyFilters from './applyFilters';
import ProgressList from '../ProgressList';


const BodyText = styled(Typography)`
  && {
    color: #666;
  }
`;


const calcSummary = (nextDraw, text, progress, remaining) => {
  if (progress < 100) {
    return text.noQualify({ nextDraw, remaining });
  }

  return text.qualify({ nextDraw });
};


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
    content: () => <BodyText>{rewardItem.description}</BodyText>,

  };
});


const PrizesWidget = (props) => {
  const {
    rewards,
    text,
    points: userPoints,
    filters,
  } = props;


  const passedProps = {
    ...filters,
    rewards,
    points: userPoints,
  };

  const filteredRewardsRaw = applyFilters(passedProps);
  const filteredRewards = filteredRewardsRaw || [];
  const amountOfRewards = filteredRewards.length || 0;
  const hasRewards = amountOfRewards > 0;

  if (!hasRewards) {
    return null;
  }

  const items = createItems(filteredRewards, userPoints, text);
  return <ProgressList {...{ items }} incremental />;
};


export default PrizesWidget;


PrizesWidget.propTypes = {
  /** single */
  range: t.bool,
  /** single */
  filters: t.shape({
    index: t.number,
    completion: t.oneOf(['completed', 'outstanding']),
    dates: t.oneOf(['past', 'upcoming']),
  }),
  /** rewards */
  rewards: t.arrayOf(
    t.shape({
      id: t.string,
      points: t.number,
      title: t.string,
      description: t.string,
      dates: t.arrayOf(t.string),
    }),
  ).isRequired,
  /** points */
  points: t.number.isRequired,
  /** text */
  text: t.shape({
    qualify: t.func,
    notQualifyText: t.func,
  }).isRequired,
};


PrizesWidget.defaultProps = {
  range: false,
  filters: {
    index: null,
    completion: null,
    dates: null,
  },
};
