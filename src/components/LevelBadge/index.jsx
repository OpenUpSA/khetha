import React from 'react';
import styled from 'styled-components';
import schema from './schema';
import SvgIcon from './SvgIcon';
import ShieldIcon from './ShieldIcon';



const PositionWrapper = styled.div`
  position: relative;
`;

const LevelBadge = ({ level = 0 }) => git (
  <PositionWrapper>
    <SvgIcon {...{ level }} />
    <ShieldIcon {...{ level }} />
  </PositionWrapper>
);


export default LevelBadge;


LevelBadge.propTypes = {
  /** User level number to determine what icon
   * and number in the shield gets returned  */
  level: schema.propTypes.level,
};

LevelBadge.defaultProps = schema.defaultProps;
