import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Icon from '../../components/Icon';


const Wrapper = styled.div`
  text-align: left;
  display: flex;
  margin-bottom: ${({ order }) => (order === 0 ? '40px' : '0')}
`;


const Title = styled(Typography)`
&& {
  color: #00C77B;
  font-size: 15px;
  font-weight: bold;
}
`;


const Description = styled(Typography)`
&& {
  line-height: 22px;
  font-size: 15px;
  color: #8C8C8C;
}
`;


const IconWrap = styled.div`
  flex-basis: 200px;
  fill: #01C98B;
  justify-content: center;
  align-items: center;
  display: flex;
`;


const Blurb = ({ title, description, icon, order }) => (
  <Wrapper key={title} {...{ order }}>
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
    <IconWrap>
      <Icon {...icon} />
    </IconWrap>
  </Wrapper>
);


export default Blurb;
