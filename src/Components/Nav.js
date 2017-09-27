'use strict';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ router }) => {
  const { pathname } = router.location;

  return (
    <nav className="col-xs-12" style={{ paddingBottom: '18px' }}>
      <ul className="nav nav-tabs">
        <li className={ pathname === '/campuses' ? 'active' : null }>
          <Link to="/campuses">Campuses</Link>
        </li>
        <li className={ pathname === '/students' ? 'active' : null }>
          <Link to="/students">Students</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
