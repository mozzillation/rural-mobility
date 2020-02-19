import React from "react"
import Slugger from "github-slugger"

import { AnchorLink } from "gatsby-plugin-anchor-links"

const TableOfContents = ({ current, headings }) => {
  const slugger = new Slugger()

  return (
    <div className="toc">
      <div className="toc__entries text">
        {headings.map(heading => (
          <li
            key={heading.value}
            className={`toc__entry toc__entry-` + heading.depth}
          >
            <i className="abstract"></i>
            <AnchorLink to={`/` + current + `#` + slugger.slug(heading.value)}>
              {heading.value}
            </AnchorLink>
          </li>
        ))}
      </div>
    </div>
  )
}

export default TableOfContents
