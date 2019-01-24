import { createElement } from 'react';
import { graphql } from 'gatsby';
import Faq from '../../../views/Faq';


const createProps = ({ allFaqsYaml, allViewsJson }) => {
  const faqs = allFaqsYaml.edges.map(({ node }) => node.en);

  const view = allViewsJson.edges[0].node.en;

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
        en {
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
        en {
          title
          confused
          chat
        }
      }
    }
  }
}`;
