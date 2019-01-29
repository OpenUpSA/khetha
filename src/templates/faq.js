// import { createElement } from 'react';
// import { graphql } from 'gatsby';
// import Faq from '../../views/Faq';

// export default ({ data }) => {
//   const props = {
//     faqs: data.allMarkdownRemark.edges.map(({ node }) => node)
//   };

//   createElement(Faq, props);
// };

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           html
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
// `;
