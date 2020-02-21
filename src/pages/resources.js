import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Resource from "../components/resource"

import Footer from "../components/footer"
import { ContributeFooter } from "../components/contribute"

const IndexPage = () => (
  <Layout>
    <SEO title="Risorse" />
    <div className="page-resources">
      <section className="page-resources__intro">
        <div className="module">
          <h1>Risorse Esterne</h1>
        </div>
      </section>
      <section className="page-resources__cards">
        <Resource
          name="SMARTA Project"
          image="resource-smarta.png"
          link="https://ruralsharedmobility.eu/"
        />
        <Resource
          name="Service Design Tools"
          image="resource-sdt.png"
          link="https://servicedesigntools.org/"
        />
      </section>
    </div>
    <ContributeFooter />
    <Footer />
  </Layout>
)

export default IndexPage
