import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"

const DocNavigation = () => {
  const navQuery = useStaticQuery(graphql`
    query {
      allSidebarNavYaml {
        nodes {
          id
          title
          items {
            title
            link
          }
        }
      }
    }
  `)

  // console.log(navQuery.allSidebarNavYaml.nodes)

  return (
    <aside className="navSidebar">
      {navQuery.allSidebarNavYaml.nodes.map((item, i) => (
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
  )
}

export default DocNavigation
