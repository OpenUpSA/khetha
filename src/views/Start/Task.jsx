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
    <CustomCard
      {...{ transparent }}
      onClick={() => !transparent && onCardPress({ amountOfQuestions, id })}
    >
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
  /** An icon that will be used in the heading. See Heading for more details.
   * Preferably an icon imported from `@material-ui/icons` */
  icon: t.string,
  transparent: t.bool,
  id: t.string.isRequired,
  points: t.number,
  /** If function is passed it will be called when button is clicked,
   * if string is passed url will be hotloaded via AJAX when button is
   * clicked. However if string links to an external domain a url will
   * be opened in new tab when button is clicked */
  clickAction: t.func,
  /** Function that is executed once the card has been clicked */
  onCardPress: t.func.isRequired,
};


Task.defaultProps = {
  icon: null,
  transparent: null,
  points: null,
  clickAction: null,
};
