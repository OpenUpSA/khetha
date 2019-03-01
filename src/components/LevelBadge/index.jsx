import React from 'react';
import t from 'prop-types';


import SvgIcon from './SvgIcon';
import ShieldIcon from './ShieldIcon';
import {
  PositionWrapper,
} from './styled';


const LevelBadge = ({ points = 0, size = 'medium' }) => (
  <PositionWrapper {...{ size }}>
    <SvgIcon {...{ points, size }} />
    {size === 'medium' && <ShieldIcon {...{ points }} />}
  </PositionWrapper>
);


export default LevelBadge;


LevelBadge.propTypes = {
  /** User level number to determine what icon
   * and number in the shield gets returned  */
  points: t.number,
  size: t.oneOf(['small', 'medium'])
};


LevelBadge.defaultProps = {
  points: 0,
  size: 'medium',
};
