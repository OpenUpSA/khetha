import { createElement } from 'react';
import { graphql } from 'gatsby';
import Start from '../../views/Start';


export default ({ data }) => {
  const props = {
    tasks: data.allTasksJson.edges.map(({ node }) => node),
  };

  return createElement(Start, props);
};


export const query = graphql`query {
  allTasksJson {
    edges {
      node {
        eng {
          id
          title
          description
          difficulty
          tasks {
            title
            description
            format
            options
          }
        }
        zul {
          id
          title
          description
          difficulty
          tasks {
            title
            description
            format
            options
          }
        }
        afr {
          id
          title
          description
          difficulty
          tasks {
            title
            description
            format
            options
          }
        }
        xho {
          id
          title
          description
          difficulty
          tasks {
            title
            description
            format
            options
          }
        }
      }
    }
  }
}`;
