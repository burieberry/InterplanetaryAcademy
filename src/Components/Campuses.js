'use strict';
import React, { Component } from 'react';
import store, { fetchCampuses } from '../store';

class Campuses extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    store.dispatch(fetchCampuses());
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { campuses } = this.state;

    return (
      <section className="row">
        <div className="col-xs-12">Campus</div>
      </section>
    );
  }
}

export default Campuses;
