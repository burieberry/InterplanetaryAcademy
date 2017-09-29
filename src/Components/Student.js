import React, { Component } from 'react';
import store from '../store';

class Student extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render() {
    const { students, campuses } = this.state;

    return (
      <section className="col-xs-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            { students[0].name }
          </div>
          <div className="panel-body">
            <ul className="list-unstyled">
              <li><a href={`mailTo:${ students[0].email }`}>{ students[0].email }</a></li>
              <li><strong>Campus:</strong> Earth</li>
            </ul>
            <button className="btn btn-info">Edit</button>
          </div>
        </div>
      </section>
    )
  }
}

export default Student;
