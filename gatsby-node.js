/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// eslint-disable-next-line
String.prototype.capitalize = function() {
  return this.replace(/(?:^|\s)\S/g, function(a) {
    return a.toUpperCase()
  })
}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

const path = require("path")
const slash = require(`slash`)
const { createFilePath, createNodeField } = require(`gatsby-source-filesystem`)
const isIndex = name => name === `index` || name.indexOf("__index") !== -1

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `Mdx`) {
    const { createNodeField } = actions
    const fileNode =
      node.parent && node.parent !== "undefined" ? getNode(node.parent) : node
    const { dir = ``, name } = path.parse(fileNode.relativePath)
    let fileName = ``
    let priority = 1
    let categoryName = fileNode.relativeDirectory

    // categoryPriority = parseInt(categoryName[0], 10)
    //
    // categoryName = categoryName.toString()
    // categoryName = categoryName.split("__")
    // categoryName = categoryName[categoryName.length - 1]
    // categoryName = categoryName.replace(/-/g, " ").capitalize()

    if (!isIndex(name)) {
      fileName = name.split("__")
      priority = parseInt(fileName[0], 10)
      fileName = fileName[fileName.length - 1]
    }

    // createNodeField({
    //   node,
    //   name: `priority`,
    //   value: priority,
    // })
    //
    // createNodeField({
    //   node,
    //   name: `category`,
    //   value: categoryName,
    // })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  //   const [relativePagePath] = page.componentPath.split('src/pages').splice('-1');

  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            body
            frontmatter {
              title
              category
              slug
            }
            tableOfContents
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  // We'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug we created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.slug,
      category: node.frontmatter.category,
      // This component will wrap our MDX content
      component: path.resolve(`./src/template/doc.js`),
      // We can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
