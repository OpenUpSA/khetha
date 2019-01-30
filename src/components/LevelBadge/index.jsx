import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SvgIcon from './SvgIcon';
import ShieldIcon from './ShieldIcon';


const PositionWrapper = styled.div`
  position: relative;
`;


const LevelBadge = ({ level = 0 }) => (
  <PositionWrapper>
    <SvgIcon {...{ level }} />
    <ShieldIcon {...{ level }} />
  </PositionWrapper>
);

export default LevelBadge;

LevelBadge.propTypes = {
  /** User level number to determine what icon
   * and number in the shield gets returned  */
  level: PropTypes.number,
};


LevelBadge.defaultProps = {
  level: 0,
};
