import React from 'react';
import styled from 'styled-components';
import illustration from './illustration.svg';


const Image = styled.img`
  display: block;
  max-height: 343px;
    max-width: 180px;
`;

const Wrapper = styled.div`
  height: 440px;
  align-items: flex-end;
  background: #00C77B;
  flex-grow: 1;
  width: 100%;
  padding: 100px 20px 0;
  justify-content: center;
  display: flex;
`;


const Hero = () => (
  <Wrapper>
    <Image src={illustration} />
  </Wrapper>
);


export default Hero;
