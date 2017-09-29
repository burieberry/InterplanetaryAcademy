import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import store, { fetchCampuses, fetchStudents } from '../store';
import Campuses from './Campuses';
import Students from './Students';

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.dispatch(fetchCampuses());
    store.dispatch(fetchStudents());
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { campuses, students } = this.state;
    return (
      <main className="container">
        <h1 className="col-xs-12" style={{ fontSize: '34px', paddingBottom: '18px' }}>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        <Route render={(router) => <Nav router={ router } />} />
        <Route exact path="/" render={() => <Campuses campuses={ campuses } />} />
        <Route exact path="/campuses" render={() => <Campuses campuses={ campuses } /> } />
        <Route exact path="/students" render={() => <Students { ...this.state } /> } />
      </main>
    );
  }
}

export default App;
