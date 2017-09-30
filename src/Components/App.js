import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store, { fetchCampuses, fetchStudents } from '../store';
import Nav from './Nav';
import Campuses from './Campuses';
import Students from './Students';
import Student from './Student';

class App extends Component {
  componentDidMount() {
    store.dispatch(fetchCampuses());
    store.dispatch(fetchStudents());
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    return (
      <main className="container">
        <h1 className="col-xs-12" style={{ fontSize: '34px', paddingBottom: '18px' }}>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        <Route render={(router) => <Nav router={ router } />} />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/campuses" />} />
          <Route exact path="/campuses" component={ Campuses } /> } />
          <Route exact path="/students" component={ Students } />
          <Route exact path="/students/:id" component={ Student } />
        </Switch>
      </main>
    );
  }
}

export default App;
