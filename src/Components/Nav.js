'use strict';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="col-xs-12" style={{ paddingBottom: '18px' }}>
      <ul className="nav nav-tabs">
        <li className="active">
          <Link to="/campuses">Campuses</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
