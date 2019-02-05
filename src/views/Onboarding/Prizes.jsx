import React from 'react';
import styled from 'styled-components';
import Blurb from './Blurb';


const createList = text => [
  {
    title: text.prizes.list[0].title,
    description: text.prizes.list[0].description,
    icon: {
      type: 'Phone',
      size: 'massive',
    },
  },
  {
    title: text.prizes.list[1].title,
    description: text.prizes.list[1].description,
    icon: {
      type: 'Mystery',
      size: 'huge',
    },
  },
];


const Wrapper = styled.div`
  margin-bottom: 35px;
`;

const Prizes = ({ text }) => (
  <Wrapper>
    {
      createList(text).map((props, index) => (
        <Blurb
          {...props}
          key={props.title}  
          order={index}
        />
      ))
    }
  </Wrapper>
);


export default Prizes;
