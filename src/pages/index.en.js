import { createElement } from 'react';
import { graphql } from 'gatsby';
import OnBoarding from '../views/Onboarding';


export default ({ data }) => createElement(
  OnBoarding,
  { translation: data.allViewsJson.edges[0].node.en },
);


export const query = graphql`query {
  allViewsJson (
    filter: {
      type: {
        eq: "views"
      }
      id: {
        eq: "onboarding"
      }
    }
  ) {
    edges {
      node {
        en {
          intro {
            title
            description
            primary
          }
          prizes {
            title
            description
            primary
            list {
              title
              description
            }
          }
          alert {
            title
            description
            primary
          }
        }
      }
    }
  }
}`;
