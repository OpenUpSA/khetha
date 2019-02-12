import { createElement } from 'react';
import { navigate } from 'gatsby';
import Start from '../../../views/Start';
import Layout from '../../../components/Layout';


const rewards = [
  {
    id: 'airtime',
    points: 10,
    title: 'R50 Airtime Voucher',
    description:
      'As a thank you for the time taken to complete a couple of initial tasks we will be awarding several participants with R50 airtime at the end of Febraury. Learn more about our other exciting prizes in your profile section.',
    dates: ['28 February 2019'],
  },
];


const translation = {
  view: {
    points: 'Kheta Points',
    filter: {
      title: 'Filter tasks',
      active: 'Filtered by',
      difficulty: [
        'Show all',
        'Easy',
        'Medium',
        'Hard',
        'Very hard',
      ],
    },
    more: {
      title: 'Need more tasks?',
      description: 'We are continually adding new tasks to this app as the build up to the 2019 election continues. Learn more about our other exciting prizes in your profile section.',
    },
  },
  rewards: {
    qualify: ({ nextDraw }) => `You qualify for the next draw in ${nextDraw}!`,
    noQualify: ({ nextDraw, remaining }) => `${remaining} more points needed to qualify for the upcoming draw in ${nextDraw}`,
  },
};


const props = {
  rewards,
  translation,
  clickAction: () => navigate('/task'),
  points: 1,
};


export default () => createElement(
  Layout,
  { points: 1, callback: navigate },
  createElement(Start, props),
);
