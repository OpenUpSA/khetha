import React from 'react';
import t from 'prop-types';


import Layout from '../../components/Layout';
import SectionHeading from '../../components/SectionHeading';
import PrizesWidget from '../../components/PrizesWidget';
import Winners from './Winners';
import { Section } from './styled';


const createPrizeSection = (text, rewards, points) => (
  <Section>
    <SectionHeading text={text.title} gutter />
    <PrizesWidget {...{ rewards, points, text }} />
  </Section>
);


const Profile = (props) => {
  const {
    translation,
    winners,
    rewards,
    points,
  } = props;

  return (
    <Layout {...{ points }}>
      {rewards && createPrizeSection(translation.rewards, rewards, points)}
      {winners && rewards && <Winners {...{ winners, rewards }} text={translation.winners} />}
    </Layout>
  );
};


export default Profile;


Profile.propTypes = {
  /** An iso key associated with the currently selected language */
  language: t.oneOf(['en', 'zu']).isRequired,
  /** The current points that the user has */
  points: t.number.isRequired,
  /** An array of everyone who has won a prize. String supplied to `prize`
   * should correspond to a `id` passed into rewards */
  winners: t.arrayOf(t.shape({
    id: t.string,
    name: t.string,
    points: t.number,
    prize: t.string,
  })),
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
  ),
  /** Contains dynamic text (translation.rewards) for the 'PrizesWidget' component
   * and this text for this view (translation.view). */
  translation: t.shape({
    view: t.shape({
      points: t.func,
      filter: t.shape({
        title: t.string,
        active: t.bool,
        difficulty: t.arrayOf(t.string),
      }),
      more: t.shape({
        title: t.string,
        description: t.string,
      }),
    }),
    rewards: t.shape({
      qualify: t.func,
      notQualifyText: t.func,
    }),
  }).isRequired,
};


Profile.defaultProps = {
  winners: null,
  rewards: null,
};
