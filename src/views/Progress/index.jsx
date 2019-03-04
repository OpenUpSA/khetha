import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import ProgressCards from '../../components/ProgressCards';

const Progress = (props) => {
  const {
    onCardPress,
    tasks,
  } = props;
  return (
    <Layout {...{ points, onMenuButtonPress }}>
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
          onCardPress={() => onCardPress(progress, id)}
        />
      ))}
    </Layout>
  );
}

Progress.propTypes = {
  onCardPress: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      icon: PropTypes.string,
      progress: PropTypes.number,
    }),
  ).isRequired,
};

export default Progress;
