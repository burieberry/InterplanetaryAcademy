import React from 'react';
import Nav from './Nav';
import Campuses from './Campuses';

const App = () => {
  return (
    <main className="container">
      <h1 className="col-xs-12" style={{ fontSize: '22px', paddingBottom: '18px' }}>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
      <Nav />
      <Campuses />
    </main>
  );
};

export default App;
