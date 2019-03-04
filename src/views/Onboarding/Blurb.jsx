import React from 'react';


import {
  BlurbWrapper,
  Title,
  Description,
  IconWrap,
  GreenIcon,
} from './styled';


const Blurb = ({ title, description, icon, order }) => (
  <BlurbWrapper key={title} {...{ order }}>
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
    <IconWrap>
      <GreenIcon {...icon} />
    </IconWrap>
  </BlurbWrapper>
);


export default Blurb;
