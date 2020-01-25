import { Link } from "gatsby"
import React, { useState } from 'react';
import  PropTypes, {bool, func} from 'prop-types';

const MobileNavigation = ({ open, links }) => {
  return (
    <nav open={open} className={open ? 'header__mobileNav is-open' : 'header__mobileNav'}>
      {
        links.map((item, i) => (
          <li className="header__mobileNav_item" key={i}>
            <Link
              to={item.link}
              activeClassName="is-active"
              partiallyActive={true}
            >
              {item.title}
            </Link>
          </li>
        ))
      }

      <li className="header__mobileNav_item">
        <Link
          to="/contribute"
          activeClassName="is-active"
        >
          Contribuisci
        </Link>
      </li>


    </nav>
  )
}

MobileNavigation.propTypes = {
  open: bool.isRequired,
}

export default MobileNavigation
