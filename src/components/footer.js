import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="module">
        <li>
          Sviluppato con{" "}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </li>
        <li>/</li>

        <li>
          <a
            href="https://github.com/mozzillation/rural-mobility-framework"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sorgente
          </a>
        </li>
        <li>/</li>

        <li>
          <Link to="/doc/code-of-conduct/">Codice di Condotta</Link>
        </li>
      </div>
    </footer>
  )
}

export default Footer
