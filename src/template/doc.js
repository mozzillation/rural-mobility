import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import PropTypes from "prop-types"

import "../style/main.sass"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Img from "gatsby-image"

import DocNavigation from "../components/navigation"

import { graphql } from "gatsby"

export const docQuery = graphql`
  query DocsQuery($id: String) {
    file(childMdx: {id: {eq: $id}}) {
      relativePath
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      tableOfContents
    }
  }
`

// ——————————————————————————————————————————————————————————————————————
// Doc Full Page
// ——————————————————————————————————————————————————————————————————————
const DocPage = ({ data: docQuery }) => {
  const { mdx, file } = docQuery
  // var checkImage = mdx.frontmatter.featuredImage
  const image = mdx.frontmatter.featuredImage
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />

      <div className="page-doc">
        <DocNavigation />

        <section className="page-doc__content">
          <header className="page-doc__content_header">
          {image ? (
            <div className="page-doc__content_header_thumb">
              <Img fluid={image.childImageSharp.fluid} alt={mdx.frontmatter.title}/>
            </div>
          ) : null}

            <div className="module">
              <div className="grid">
                <div className="page-doc__content_header_text">
                  {mdx.frontmatter.category ? (
                    <span className="page-doc__content_header_text_category">
                      {mdx.frontmatter.category}
                    </span>
                  ) : null}

                  <h1>{mdx.frontmatter.title}</h1>
                </div>
              </div>
            </div>
          </header>

          <main className="page-doc__content_body">
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </main>
        </section>
      </div>
    </Layout>
  )
}

export default DocPage
