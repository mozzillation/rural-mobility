import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import PropTypes from "prop-types"

import "../style/main.sass"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import DocNavigation from "../components/navigation"
import { EditLink, ContributeFooter } from "../components/contribute"
import Img from "gatsby-image"

import TableOfContents from "../components/toc"

import { graphql } from "gatsby"

export const docQuery = graphql`
  query DocsQuery($id: String) {
    allSidebarNavYaml {
      nodes {
        id
        title
        items {
          title
          link
        }
      }
    }
    mdx(id: { eq: $id }) {
      parent {
        id
        ... on File {
          id
          name
          relativePath
          modifiedTime(fromNow: true, locale: "it")
        }
      }
      id
      body
      headings {
        depth
        value
      }
      frontmatter {
        title
        category
        slug
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
  const { mdx, allSidebarNavYaml } = docQuery
  // var checkImage = mdx.frontmatter.featuredImage
  const image = mdx.frontmatter.featuredImage
  const docs = allSidebarNavYaml.nodes
  const editLink = mdx.parent.relativePath
  const lastEdit = mdx.parent.modifiedTime

  // console.log(docs)
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />

      <div className="page-doc">
        <DocNavigation docs={docs} />

        <TableOfContents
          current={mdx.frontmatter.slug}
          headings={mdx.headings}
        />

        <section className="page-doc__content">
          <header className="page-doc__content_header">
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

            {image ? (
              <div className="page-doc__content_header_thumb">
                <Img
                  fluid={image.childImageSharp.fluid}
                  alt={mdx.frontmatter.title}
                />
              </div>
            ) : null}
          </header>

          <main className="page-doc__content_body">
            <MDXRenderer headings={mdx.headings}>{mdx.body}</MDXRenderer>
          </main>

          <EditLink path={editLink} lastEdit={lastEdit} />
          <ContributeFooter />
          <Footer />
        </section>
      </div>
    </Layout>
  )
}

export default DocPage
