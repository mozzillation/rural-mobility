import React from "react"
import Immagine from "./image"

const Resource = ({ name, link, image }) => {
  return (
    <div className="resource">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="resource__image">
          <Immagine src={image} />
        </div>

        <div className="resource__meta">
          <div className="resource__meta_name">{name}</div>
          <div className="resource__meta_link">{link}</div>
        </div>
      </a>
    </div>
  )
}

export default Resource
