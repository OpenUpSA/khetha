import React, { Component } from 'react';
import t from 'prop-types';
import { messaging } from '../../helpers/firebaseHelpers';
import Markup from './Markup';


class Start extends Component {
  state = {
    filter: null,
  };

  componentDidMount() {
    messaging.requestPermission().then(() => messaging.getToken());
  }

  changeFilter = (value) => {
    if (value <= 0) {
      return this.setState({ filter: null })
    }

    const filter = value.toString();
    return this.setState({ filter });
  }

  render() {
    const { state, props, ...events } = this;

    const passedProps = {
      filter: state.filter,
      changeFilter: events.changeFilter,
      tasks: props.tasks || [],
      translation: props.translation,
      clickAction: props.clickAction,
      rewards: props.rewards,
      points: props.points,
    };

    return <Markup {...passedProps} />;
  }
}


export default Start;


Start.propTypes = {
  /** Value passed to the 'PrizesWidget' component.
   * Visit component for more information. */
  points: t.number.isRequired,
  /** Value passed to the 'PrizesWidget' component.
   * Visit component for more information. */
  rewards: t.arrayOf(
    t.shape({
      id: t.string,
      points: t.number,
      title: t.string,
      description: t.string,
      dates: t.arrayOf(t.string),
    }),
  ).isRequired,
  /** Contains dynamic text (translation.rewards) for the 'PrizesWidget' component
   * and this text for this view (translation.view). */
  translation: t.shape({
    view: t.shape({
      points: t.func,
      filter: t.shape({
        title: t.string,
        active: t.string,
        difficulty: t.arrayOf(t.string),
      }),
      more: t.shape({
        title: t.string,
        description: t.string,
      }),
      rewards: t.shape({
        qualify: t.func,
        notQualifyText: t.func,
      }),
    }),
  }).isRequired,
  /** An array of tasks that a user can currently start. */
  tasks: t.arrayOf(
    t.shape({
      points: t.number.isRequired,
      title: t.string.isRequired,
      description: t.string,
      icon: t.string,
    }),
  ),
};


Start.defaultProps = {
  tasks: [],
};
