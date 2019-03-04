import React from 'react';
import t from 'prop-types';

import {
  BlurbWrapper,
  Title,
  Description,
  IconWrap,
  GreenIcon,
} from './styled';


const Blurb = ({
  title,
  description,
  icon,
  order,
}) => (
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

Blurb.propTypes = {
  /** The title that will appear for this view */
  title: t.string,
  /** The description that will appear for this view */
  description: t.string,
  /** An icon that should be used on the right side
   * of the button. Preferably an icon imported
   * from `@material-ui/icons` */
  icon: t.string,
  /** TODO */
  order: t.number,
};

Blurb.defaultProps = {
  title: '',
  description: '',
  icon: '',
  order: 0,
};
