import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import t from 'prop-types';


import Heading from './Heading';
import {
  Description,
  CustomCard,
} from './styled';


const ComponentWrapper = ({ source: Source, children }) => <Source>{children}</Source>;


ComponentWrapper.propTypes = {
  source: t.oneOfType([t.func, t.string]).isRequired,
  children: t.node.isRequired,
};


const Task = (props) => {
  const {
    points,
    title,
    description,
    icon,
    transparent,
    onCardPress,
    id,
    amountOfQuestions,
  } = props;

  return (
    <CustomCard {...{ transparent }} onClick={() => onCardPress({ amountOfQuestions, id })}>
      <ComponentWrapper source={transparent ? 'div' : CardActionArea}>
        <CardContent>
          <Heading {...{ title, icon, points }} />
          <Description component="p">
            {description}
          </Description>
        </CardContent>
      </ComponentWrapper>
    </CustomCard>
  );
};


export default Task;


Task.propTypes = {
  title: t.string.isRequired,
  description: t.string.isRequired,
  icon: t.string,
  transparent: t.bool,
  id: t.string.isRequired,
  points: t.number,
  clickAction: t.func,
};


Task.defaultProps = {
  icon: null,
  transparent: null,
  points: null,
  clickAction: null,
};
