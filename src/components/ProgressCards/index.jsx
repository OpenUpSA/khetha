import React from 'react';
import PropTypes from 'prop-types';
import { CardActionArea } from '@material-ui/core';
import {
  HeaderProgress,
  Wrapper,
  CardWrapper,
  CardContentStyled,
  TextWrapper,
  ProgressAndTitle,
  Progress,
  Title,
} from './styled';
import Icon from '../Icon';

const ProgressCards = ({
  title,
  icon,
  progress,
  onCardPress,
}) => (
  <Wrapper>
    <CardWrapper {...{ progress }}>
      <CardActionArea onClick={onCardPress}>
        <CardContentStyled>
          <TextWrapper>
            <ProgressAndTitle>
              <Progress {...{ progress }}>{progress >= 100 ? 'Completed' : 'In progress'}</Progress>
              <Title {...{ progress }}>{title}</Title>
            </ProgressAndTitle>
            <Icon type={icon} size="huge" color={progress >= 100 ? 'light-grey' : 'blue'} />
          </TextWrapper>
          <HeaderProgress
            classes={{ barColorPrimary: 'barColor' }}
            variant="determinate"
            value={progress}
            {...{ progress }}
          />
        </CardContentStyled>
      </CardActionArea>
    </CardWrapper>
  </Wrapper>
);

ProgressCards.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  onCardPress: PropTypes.func.isRequired,
};

export default ProgressCards;
