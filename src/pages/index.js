import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page-index">
      <section className="page-index__intro">
        <div className="module">
          <div className="page-index__intro_text">
            <h1>Una nuova ruralità in movimento</h1>

            <p>
              RMF è un framework open-source che aiuta le aziende di trasporto
              pubblico in zone emarginate a migliorare l'esperienza di mobilità.
            </p>

            <div className="page-index__intro_text_bottom">
              <Link to="/doc" className="btn-big btn-primary_orange">
                Documentazione
              </Link>
              <Link to="/about" className="btn-big btn-secondary_orange">
                Il Progetto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
