import React from 'react';


import Blurb from './Blurb';
import { PrizesWrapper } from './styled';


const createList = text => text.map((props, index) => ({
  ...props,
  icon: {
    type: index < 1 ? 'Phone' : 'Mystery',
    size: index < 1 ? 'massive' : 'huge',
  },
}));


const Prizes = ({ text }) => (
  <PrizesWrapper>
    {
      createList(text).map(({ title, description, icon }, index) => (
        <Blurb
          {...{ title, description, icon }}
          key={title}
          order={index}
        />
      ))
    }
  </PrizesWrapper>
);


export default Prizes;
