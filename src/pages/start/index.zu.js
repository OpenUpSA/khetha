import { createElement } from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import Start from '../../views/Start';


const calcIfActive = schedule => moment
  .duration({ to: moment(new Date(schedule)), from: moment() })
  .asDays() <= 0;


const createProps = ({ allTasksJson, allViewsJson }) => {
  const tasks = allTasksJson.edges.map(({ node }) => ({
    points: node.points,
    active: calcIfActive(node.schedule),
    ...node.zu,
  }));

  const translation = allViewsJson.edges[0].node.zu;

  return {
    tasks,
    translation,
  };
};


export default ({ data }) => createElement(Start, createProps(data));


export const query = graphql`query {
  allTasksJson {
    edges {
      node {
        schedule
        points
        zu {
          title
          description
          tasks {
            title
            description
            format
          }
        }
      }
    }
  }
  allViewsJson (
    filter: {
      type: {
        eq: "views"
      }
      id: {
        eq: "start"
      }
    }
  ) {
    edges {
      node {
        zu {
          points
          filter {
            title
            difficulty
          }
          more {
            title
            description
          }
        }
      }
    }
  }
}`;
