export default {
  view: {
    points: points => `${points} Khetha Point${points > 1 ? 's' : ''}`,
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
      description: 'We are continually adding new tasks to this app as the build up to the 2019 election continues.',
    },
  },
  rewards: {
    description: 'Sit excepteur consequat pariatur eu excepteur voluptate reprehenderit. Ad ex proident est non non voluptate eu duis eiusmod do veniam cupidatat duis reprehenderit. Eiusmod irure fugiat aute cillum enim id commodo voluptate sint aute dolor. In est ad ad enim nisi magna qui pariatur eu elit anim duis nisi. Dolor enim aute minim ut consequat duis cupidatat amet incididunt id fugiat pariatur ullamco',
    qualify: ({ nextDraw }) => `You qualify for the next draw in ${nextDraw}!`,
    noQualify: ({ nextDraw, remaining }) => `${remaining} more points needed to qualify upcoming draw in ${nextDraw}`,
  },
};
