import React from 'react';
import t from 'prop-types';


import applyFilters from './applyFilters';
import ProgressList from '../ProgressList';
import createItems from './createItems';


const PrizesWidget = (props) => {
  const {
    rewards,
    translation: text,
    points: userPoints,
    filters,
  } = props;


  const passedProps = {
    completion: filters.progress,
    date: filters.date,
    index: filters.index,
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
  /** TODO: I'm not sure what this component should do exactly */
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
  /** Language specific text to be used in this view */
  translation: t.shape({
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
