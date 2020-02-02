import { Link } from "gatsby"
import React from "react"
import { bool } from "prop-types"

const MobileNavigation = ({ open, links, docs }) => {
  return (
    <nav
      open={open}
      className={open ? "header__mobileNav is-open" : "header__mobileNav"}
    >
      {links.map((item, i) => (
        <li className="header__mobileNav_item" key={i}>
          <Link
            to={item.link}
            activeClassName="is-active"
            partiallyActive={true}
          >
            {item.title}
          </Link>

          {i === 0 ? (
            <ul className="header__mobileNav_item_sub">
              {docs.map((item, i) => (
                <div className="header__mobileNav_item_sub_group" key={item.id}>
                  <span className="header__mobileNav_item_sub_group_title">
                    {item.title}
                  </span>
                  <ul className="header__mobileNav_item_sub_group_sub">
                    {item.items.map((child, i) => (
                      <li
                        className="header__mobileNav_item_sub_group_sub_item"
                        key={i}
                      >
                        <Link to={child.link} activeClassName="is-active">
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </nav>
  )
}

MobileNavigation.propTypes = {
  open: bool.isRequired,
}

export default MobileNavigation
