const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.id,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const { createPage } = actions
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `posts/${node.fields.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, '.src/components/'),
        // '@icons': path.resolve(__dirname, '../../icons/'),
        '@styles': path.resolve(__dirname, './src/styles/'),
        // '@utils': path.resolve(__dirname, '../../utils/'),
        // '@types': path.resolve(__dirname, '../../types/'),
      },
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
  });
};
