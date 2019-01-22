module.exports = ({ graphql }) => graphql`{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          type
          title
          icon
          translated_title {
            language
            translation
          }
          translated_question_link {
            frontmatter {
              translated_question_title
              question_link {
                frontmatter {
                  language
                  question_title
                  questions {
                    description
                    formatOfAnswer
                    question
                  }
                }
              }
              question_translations_link {
                frontmatter {
                  language
                  question_title
                  questions {
                    description
                    formatOfAnswer
                    question
                  }
                }
              }
            }
          }
          translated_resource_link {
            frontmatter {
              translated_resource_title
              resource_translations_link {
                html
                frontmatter {
                  language
                  resource_title
                }
              }
              resource_link {
                html
                frontmatter {
                  language
                  resource_title
                }
              }
            }
          }
        }
      }
    }
  }
}`;
