import React from 'react';
import { graphql } from 'gatsby';
import AboutPage from '../views/AboutPage';


const parseProps = (data) => {
  const {
    html,
    frontmatter,
  } = data.allMarkdownRemark.edges[0].node;

  const {
    tagline,
    contributors,
    partners,
  } = frontmatter;

  return {
    tagline,
    html,
    partners,
    contributors,
  };
};


export default ({ data }) => {
  const props = parseProps(data);
  return <AboutPage {...props} />;
};


export const query = graphql`{
  allMarkdownRemark (
    filter: {
      frontmatter: {
        type: {
          eq: "static"
        }
        page: {
          eq: "about"
        }
      }
    }
  ) {
    edges {
      node {
        html
        frontmatter {
          tagline
          partners {
            link
            logo
            name
          }
          contributors {
            link
            name
          }
        }
      }
    }
  }
}`;
