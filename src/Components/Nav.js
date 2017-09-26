'use strict';
import React from 'react';

const Nav = () => {
  return (
    <nav className="col-xs-12" style={{ paddingBottom: '18px' }}>
      <ul className="nav nav-tabs">
        <li className="active"><a href="/">Home</a></li>
        <li><a href="#">Campuses</a></li>
        <li><a href="#">Students</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
