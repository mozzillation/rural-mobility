import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import VideoIntro from "../video/intro.mp4"
import SEO from "../components/seo"
import Img from "gatsby-image"

import Footer from "../components/footer"
import { ContributeFooter } from "../components/contribute"

import { useStaticQuery, graphql } from "gatsby"

const LatestEdits = () => {
  const latest = useStaticQuery(graphql`
    query latestQuery {
      allFile(
        sort: { fields: modifiedTime, order: DESC }
        filter: {
          extension: { eq: "mdx" }
          id: {
            nin: [
              "413b9180-2fdf-5cad-8f98-aa42d1b6df04"
              "0b7cfabd-91b1-59a7-86c6-abbfcc27dea6"
              "e317983f-c00c-5e0b-8928-137e567267e2"
              "20c1000e-1cfd-5d1b-a2e2-7ab56cb47dc8"
            ]
          }
        }
        limit: 3
      ) {
        edges {
          node {
            id
            childMdx {
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
            }
          }
        }
      }
    }
  `)

  return (
    <section className="page-index__latest">
      <div className="module">
        <h2>Contenuti aggiornati recentemente</h2>
      </div>
      <div className="page-index__latest_items">
        {latest.allFile.edges.map((item, i) => (
          <div className="page-index__latest_item">
            <Link to={item.node.childMdx.frontmatter.slug}>
              <div className="page-index__latest_item_thumb">
                <Img
                  fluid={
                    item.node.childMdx.frontmatter.featuredImage.childImageSharp
                      .fluid
                  }
                  alt={item.node.childMdx.frontmatter.title}
                />
              </div>
              <div className="category">
                {item.node.childMdx.frontmatter.category}
              </div>
              <div className="title">
                {item.node.childMdx.frontmatter.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page-index">
      <section className="page-index__intro">
        <div className="page-index__intro_bg">
          <video preload="true" autoPlay playsInline muted loop>
            <source src={VideoIntro} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="module">
          <div className="page-index__intro_text">
            <h1>Una nuova ruralità in movimento</h1>
          </div>
        </div>
      </section>
      <div className="page-index__intro_subtext">
        <div className="page-index__intro_subtext_card">
          <div className="module">
            <p>
              RMF è un framework open-source che aiuta le aziende di trasporto
              pubblico a migliorare l'esperienza di mobilità nelle zone
              emarginate.
            </p>

            <div className="page-index__intro_text_bottom">
              <Link to="/doc/" className="btn-big btn-primary_green">
                Documentazione
              </Link>
              <Link to="/about" className="btn-big btn-secondary_green">
                Il Progetto
              </Link>
            </div>
          </div>
        </div>
      </div>

      <LatestEdits />
      <ContributeFooter />
      <Footer />
    </div>
  </Layout>
)

export default IndexPage
