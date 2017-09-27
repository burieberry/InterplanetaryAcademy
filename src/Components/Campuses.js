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
        <ul className="col-xs-10 list-unstyled">
          {
            campuses.map(campus => {
              return (
                <li key={ campus.id } className="col-xs-6">
                  <section className="panel panel-default">
                    <div className="panel-heading">
                      <h3>{ campus.name }</h3>
                    </div>
                    <div className="panel-body">
                      <img src={ campus.image } width="400" height="250" />
                    </div>
                  </section>
                </li>
              )
            })
          }
        </ul>
      </section>
    );
  }
}

export default Campuses;
