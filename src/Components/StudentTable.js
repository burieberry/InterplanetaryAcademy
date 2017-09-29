import React, { Component } from 'react';
import store, { removeStudentThunk, showForm } from '../store';

class StudentTable extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.onDelete = this.onDelete.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  onDelete(student) {
    store.dispatch(removeStudentThunk(student));
  }

  showForm(form) {
    store.dispatch(showForm(form));
  }

  render() {
    const { students, campuses, form } = this.state;
    const { onDelete, showForm } = this;

    return (
      <section className="col-xs-8">
        <button onClick={ () => showForm(form) } className="btn btn-info pull-right" style={{ marginLeft: '10px' }}>Edit</button>
        <button onClick={ () => showForm(form) } className="btn btn-primary pull-right">+</button>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Campus</th>
              <th />
            </tr>
          </thead>
          <tbody>
          {
            students.map(student => {
              return (
                <tr key={ student.id } name="student" value={ student }>
                  <td>{ student.id }</td>
                  <td>{ student.name }</td>
                  <td>
                    {
                      campuses.filter(campus => campus.id === student.campusId).length ?
                      campuses.filter(campus => campus.id === student.campusId)[0].name
                      : '-'
                    }
                  </td>
                  <td>
                    <button onClick={ () => onDelete(student) } type="submit" className="btn btn-xs btn-danger">Delete</button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </section>
    )
  }
}

export default StudentTable;
