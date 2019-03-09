import React from 'react';


import illustration from './illustration.svg';
import { HeroWrapper, Image } from './styled';


const Hero = () => (
  <HeroWrapper>
    <Image src={illustration} />
  </HeroWrapper>
);


export default Hero;
