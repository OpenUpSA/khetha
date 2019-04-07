import React from 'react';
import Icon from '../../Icon';


import {
  Percentage,
  Value,
  PositionIcon,
} from './styled';


const IconOverlay = (props) => {
  const {
    percentage,
    incremental,
    index,
    error,
  } = props;


  if (error) {
    return <PositionIcon type="Warning" size="small" color="red" />;
  }

  if (percentage >= 100) {
    return <Icon type="Check" color="blue" />;
  }

  if (incremental) {
    return <Percentage>{`${percentage}%`}</Percentage>;
  }

  return <Value>{index}</Value>;
};


export default IconOverlay;
