import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import logo from "../images/rmf_logo.svg"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query headerNav {
      allHeaderNavYaml {
        nodes {
          id
          items {
            link
            title
          }
        }
      }
    }
  `)

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt={siteTitle} />
          </Link>
        </div>

        <nav className="header__nav">
          {data.allHeaderNavYaml.nodes[0].items.map((item, i) => (
            <li className="header__nav_item" key={i}>
              <Link
                to={item.link}
                activeClassName="is-active"
                partiallyActive={true}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </nav>

        <div className="header__contribute">
          <Link
            to="/contribute"
            activeClassName="is-active"
            className="btn-small btn-secondary_purple"
          >
            Contribuisci
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
