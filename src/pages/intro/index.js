import { createElement } from 'react';
import { navigate } from 'gatsby';


import OnBoarding from '../../views/Onboarding';


const props = {
  translation: [
    {
      title: 'What is Khetha?',
      description: 'Kheta is an online game where you can win prizes just by sharing your thoughts on the Mzansi 2019 election.',
      primary: 'Start!',
    },
    {
      title: 'Want to win?',
      description: 'Complete tasks to unlock levels and stand a chance to win the following:',
      primary: 'Continue',
      list: [
        {
          title: 'Free Airtime',
          description: 'Stand a change to win free airtime by completing your first task!',
        },
        {
          title: 'R25 000 worth of prizes',
          description: 'You will become eligible for more weekly/monthly prizes as you unlock more levels.',
        },
      ],
    },
    {
      title: 'Very important!',
      description: 'In order for us to arrange the delivery of your first reward and additional rewards you need to allow notifications:',
      primary: 'I understand',
    },
  ],
  onCompleteOnboarding: () => navigate('./start/'),
};


export default () => createElement(OnBoarding, props);
