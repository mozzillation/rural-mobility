import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import VideoIntro from "../video/intro.mp4"
import SEO from "../components/seo"

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
        <div className="page-index__intro_subtext">
          <div className="module">
            <div className="page-index__intro_subtext_card">
              <p>
                RMF è un framework open-source che aiuta le aziende di trasporto
                pubblico a migliorare l'esperienza di mobilità nelle zone emarginate.
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
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
