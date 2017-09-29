import React, { Component } from 'react';
import store from '../store';

class StudentTable extends Component {
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
      <div className="col-xs-8">
        <button className="btn btn-primary pull-right">+</button>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Campus</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            students.map(student => {
              return (
                <tr key={ student.id }>
                  <td>{ student.id }</td>
                  <td>
                  {
                    student.email ? (
                      <a href={`mailTo:${ student.email }`}>{ student.name }</a>
                    ) : student.name
                  }
                  </td>
                  <td>
                    {
                      campuses.filter(campus => campus.id === student.campusId).length ?
                      campuses.filter(campus => campus.id === student.campusId)[0].name
                      : '-'
                    }
                  </td>
                  <td>
                    <button className="btn btn-xs btn-danger">Delete</button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default StudentTable;
