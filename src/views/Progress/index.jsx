import React from 'react';
import t from 'prop-types';


import Layout from '../../components/Layout';


const Progress = (props) => {
  const {
    onMenuButtonPress,
    points,
    onCardPress,
  } = props;


  return (
    <Layout {...{ points, onMenuButtonPress}}>
      <pre>
        <code style={{ display: 'block', background: 'black', color: 'white', whiteSpace: 'pre-wrap' }}>
          {JSON.stringify(props, 0, 2)}
        </code>
        <button onClick={() => onCardPress(3)}>example card click - should return id (example 3)</button>
      </pre>
    </Layout>
  );
};


export default Progress;

Progress.propTypes = {
  /** The points that have been accumulated */
  points: t.number,
  /** Function that is executed once the button has been clicked */
  onMenuButtonPress: t.func,
  /** Function that is executed once the card has been clicked */
  onCardPress: t.func,
};

Progress.defaultProps = {
  onMenuButtonPress: null,
  points: 0,
  onCardPress: null,
};
