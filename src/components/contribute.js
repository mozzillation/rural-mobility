import React from "react"
import { Link } from "gatsby"

export const EditLink = ({ path, lastEdit }) => {
  return (
    <div className="contribute__editLink">
      <div className="module">
        Ultima modifica: {lastEdit} —{" "}
        <a
          href={
            `https://github.com/mozzillation/rural-mobility-framework/tree/master/src/doc/` +
            path
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Modifica su Github
        </a>
      </div>
    </div>
  )
}

export const ContributeFooter = () => {
  return (
    <div className="contribute__footer">
      <div className="module">
        <div className="contribute__footer_texts">
          <h6>Contribuisci a RMF</h6>
          <h2>
            <span>Aiutaci a migliorare la mobilità</span>
            <span>nelle zone emarginate</span>
          </h2>
          <p>
            RMF è un progetto open-source, chiunque può contribuire ai
            contenuti: che tu sia designer o un passeggero, offri le tue
            competenze e rimetti in moto la mobilità rurale!
          </p>
          <Link to="/doc/contribute" className="btn-big btn-secondary_pink">
            Contribuisci ora
          </Link>
        </div>
      </div>
    </div>
  )
}
