/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from "react"
import { bool, func } from "prop-types"

const Burger = ({ open, setOpen }) => {
  return (
    <div
      open={open}
      onClick={() => setOpen(!open)}
      role="link"
      tabIndex="0"
      className={
        open ? "header__sidebarButton is-open" : "header__sidebarButton"
      }
    >
      <i className="header__sidebarButton_bar" />
      <i className="header__sidebarButton_bar" />
    </div>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger
