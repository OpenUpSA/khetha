import React from 'react';


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
}


export default Progress;
