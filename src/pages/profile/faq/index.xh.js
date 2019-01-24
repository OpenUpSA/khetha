import { createElement } from 'react';
import { graphql } from 'gatsby';
import Faq from '../../../views/Faq';


const createProps = ({ allFaqsYaml, allViewsJson }) => {
  const faqs = allFaqsYaml.edges.map(({ node }) => node.xh);

  const view = allViewsJson.edges[0].node.xh;

  return {
    faqs,
    view,
  };
};


export default ({ data }) => createElement(Faq, createProps(data));


export const query = graphql`query {
  allFaqsYaml {
    edges {
      node {
        xh {
          title
          body
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
        eq: "faq"
      }
    }
  ) {
    edges {
      node {
        xh {
          title
          confused
          chat
        }
      }
    }
  }
}`;
