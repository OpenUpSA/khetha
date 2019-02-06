import { createElement } from 'react';
import Profile from '../../views/Profile';
import Layout from '../../components/Layout';
import { navigate }  from 'gatsby';


const props = {
  points: 0,
  translation: {
    view: {
      language: {
        title: 'Change Language',
        prefix: 'Current Language',
      },
      help: {
        title: 'Need Help?',
        primary: 'Find an Answer',
      },
      winners: {
        title: 'Previous Winners',
        name: 'Name',
        points: 'Points',
        prize: 'Prize',
      },
    },
    rewards: {
      title: 'Rewards',
      points: 'Required Points',
      description: 'Sit excepteur consequat pariatur eu excepteur voluptate reprehenderit. Ad ex proident est non non voluptate eu duis eiusmod do veniam cupidatat duis reprehenderit. Eiusmod irure fugiat aute cillum enim id commodo voluptate sint aute dolor. In est ad ad enim nisi magna qui pariatur eu elit anim duis nisi. Dolor enim aute minim ut consequat duis cupidatat amet incididunt id fugiat pariatur ullamco',
      qualify: ({ nextDraw }) => `You qualify for the next draw in ${nextDraw}!`,
      noQualify: ({ nextDraw, remaining }) => `${remaining} more points needed to qualify upcoming draw in ${nextDraw}`,
    },
  },
  rewards: [
    {
      id: 'airtime',
      points: 10,
      title: 'R50 Airtime Voucher',
      description:
        'As a thank you for the time taken to complete a couple of initial tasks we will be awarding several participants with R50 airtime at the end of Febraury.',
      dates: ['28 February 2019'],
    },
  ],
};


export default () => createElement(
  Layout,
  { points: 0 },
  createElement(Profile, props),
);
