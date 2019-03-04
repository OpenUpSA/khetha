import React from 'react';


import Layout from '../../components/Layout';
import ProgressCards from '../../components/ProgressCards';


const Progress = (props) => {
  const {
    onMenuButtonPress,
    points,
    onCardPress,
    tasks,
  } = props;


  return (
    <Layout {...{ points, tasks}}>
      <button onClick={() => onCardPress(3)}>example card click - should return id (example 3)</button>
      {tasks.map(({
        id,
        title,
        icon,
        progress,
      }) => (
        <ProgressCards
          key={id}
          title={title}
          icon={icon}
          progress={progress}
          onCardPress={() => onCardPress(3)}
        />
      ))}
    </Layout>
  );
}


export default Progress;
