import { createElement } from 'react';
import { graphql } from 'gatsby';
import Profile from '../../views/Profile';


const createProps = ({ allViewsJson }) => {
  const view = allViewsJson.edges[0].node.zu;

  return {
    view,
  };
};


export default ({ data }) => createElement(Profile, createProps(data));


export const query = graphql`query {
  allViewsJson (
    filter: {
      type: {
        eq: "views"
      }
      id: {
        eq: "profile"
      }
    }
  ) {
    edges {
      node {
        zu {
          primary
          winners
          help {
            title
            primary
          }
          rewards {
            title
            list {
              title
              prompt
              level
              description
            }
          }
        }
      }
    }
  }
}`;
