import React from "react"
import { Link } from "gatsby"

const DocNavigation = ({ docs }) => {
  return (
    <>
    <aside className="navSidebar">
      {docs.map((item, i) => (
        <div className="navSidebar_group" key={item.id}>
          <span className="navSidebar_group_title">{item.title}</span>
          <ul className="navSidebar_group_sub">
            {item.items.map((child, i) => (
              <li className="navSidebar_group_sub_item" key={i}>
                <Link to={child.link} activeClassName="is-active">
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
    </>
  )
}

export default DocNavigation
