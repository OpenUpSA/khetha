import React from 'react';
import t from 'prop-types';


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

Prizes.propTypes = {
  /** Text properties that describe the prizes */
  text: t.shape({
    title: t.string,
    description: t.string,
    icon: t.string,
  }),
};

Prizes.defaultProps = {
  text: {},
};
