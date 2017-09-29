import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { removeStudentThunk, showForm } from '../store';
import Student from './Student';

class StudentTable extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.onDelete = this.onDelete.bind(this);
    this.showForm = this.showForm.bind(this);
    this.getCampus = this.getCampus.bind(this);
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

  getCampus(id) {
    const { campuses } = this.props;
    return campuses.filter(campus => campus.id === id).length ? campuses.filter(campus => campus.id === id)[0].name : '-';
  }

  render() {
    const { students, campuses, form } = this.state;
    const { onDelete, showForm, getCampus } = this;

    return (
      <section className="col-xs-8">
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
                  <td>
                    <Link to={ `/students/${ student.id }` }>{ student.name }</Link>
                  </td>
                  <td>{ getCampus(student.campusId) }</td>
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
