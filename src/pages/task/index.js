import { createElement } from 'react';
import { navigate } from 'gatsby';
import Task from '../../views/Task';
import Layout from '../../components/Layout';


const props = {
  onComplete: () => {
    setTimeout(
      () => navigate('/start/done'),
      2000,
    );
  },
  incremental: false,
  questions: [
    {
      title: 'What will your gaming name be?',
      description: 'This is the name that will be displayed when sharing your score with other players. You can either choose your real name or a pseudonym if you want to remain anonymous.',
      format: 'string',
    },
    {
      title: 'What is you current location?',
      description: "Make sure that you device's GPS is enabled, and press the following button to automatically enter your location.",
      format: 'gps',
    },
    {
      title: 'Do you give us permission to save your information?',
      format: 'boolean',
      description: 'We value your privacy and wont share any of your information with third-parties. All data collected from users is saved and analysed with complete privacy. In other words your will remain completely anonomous.',
    },
    {
      title: 'How many elections have you voted in?',
      format: 'select',
      description: 'Please select a number from the list below',
      options: [
        'None',
        '1',
        '2',
        '3',
        '4',
        '5',
      ],
    },
    {
      title: 'Are you currently registered to vote?',
      format: 'boolean',
    },
    {
      title: 'Do you plan to vote in 2019?',
      format: 'boolean',
    },
  ],
};


export default () => createElement(
  Layout,
  { points: 0, callback: navigate },
  createElement(Task, props),
);
