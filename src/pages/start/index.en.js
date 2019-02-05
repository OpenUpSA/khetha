import { createElement } from 'react';

export default () => createElement('div', {}, 'Placeholder');

// import { createElement } from 'react';
// import { graphql } from 'gatsby';
// import moment from 'moment';
// import Start from '../../views/Start';


// const calcIfActive = schedule => moment
//   .duration({ to: moment(new Date(schedule)), from: moment() })
//   .asDays() <= 0;


// const createProps = ({ allTasksJson, allViewsJson }) => {
//   const tasks = allTasksJson.edges.map(({ node }) => ({
//     points: node.points,
//     active: calcIfActive(node.schedule),
//     ...node.en,
//   }));

//   const view = allViewsJson.edges[0].node.en;

//   return {
//     tasks,
//     view,
//   };
// };


// export default ({ data }) => createElement(Start, createProps(data));


// export const query = graphql`query {
//   allTasksJson {
//     edges {
//       node {
//         schedule
//         points
//         en {
//           title
//           description
//           tasks {
//             title
//             description
//             format
//           }
//         }
//       }
//     }
//   }
//   allViewsJson (
//     filter: {
//       type: {
//         eq: "views"
//       }
//       id: {
//         eq: "start"
//       }
//     }
//   ) {
//     edges {
//       node {
//         en {
//           points
//           filter {
//             title
//             difficulty
//           }
//           more {
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// }`;
