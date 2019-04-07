import React from 'react';


import Task from './Task';
import calcDifficulty from './calcDifficulty';
import { CardWrap } from './styled';


const CardWrapper = (cardProps) => {
  const {
    points,
    title,
    icon,
    description,
    id,
    filter,
    onCardPress,
    amountOfQuestions,
  } = cardProps;


  if (filter === null || filter === calcDifficulty(points)) {
    return (
      <CardWrap key={title}>
        <Task
          {...{
            points,
            title,
            description,
            icon,
            onCardPress,
            amountOfQuestions,
            id,
          }}
        />
      </CardWrap>
    );
  }

  return null;
};


export default CardWrapper;
