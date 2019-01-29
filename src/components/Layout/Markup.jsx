import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import LevelBadge from '../LevelBadge';
import MenuHeader from './MenuHeader';

const Markup = ({ children, points = 0, text="" }) => (
    <Fragment>
      <div>
        <LevelBadge level={points} />
        {children}
      </div>
      <div>
        <MenuHeader text="Honey Bee Level" />
        {children}
      </div>
    </Fragment>
);
 
export default Markup;

Markup.propTypes = {
  children: PropTypes.node,
  points: PropTypes.number,
  text: PropTypes.string.isRequired,
}

Markup.defaultProps = {
  children: null,
  points: 0,
}