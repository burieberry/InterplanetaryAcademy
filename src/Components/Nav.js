'use strict';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ router }) => {
  const { pathname } = router.location;
  const tabs = [
    {
      title: 'Campuses',
      path: '/campuses'
    },
    {
      title: 'Students',
      path: '/students'
    }
  ]

  return (
    <nav className="section">
      <ul className="nav nav-tabs">
        {
          tabs.map(tab => {
            return (
              <li key={ tab.path } className={ pathname === tab.path ? 'active nav-hed' : 'nav-hed' }>
                <Link to={ tab.path }>{ tab.title }</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
};

export default Nav;
