import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeStudentThunk, showForm, fetchStudents } from '../store';

class StudentTable extends Component {
  componentDidMount() {
    this.props.fetchStudents();
    this.props.showForm();
  }

  render() {
    return (
      <StudentTableDetail { ...this.props } />
    )
  }
}

const StudentTableDetail = ({ students, campuses, onDelete, onClick }) => {
  return (
    <section className="students-table panel col-xs-7">
      <button onClick={ onClick } className="btn btn-primary pull-right">+</button>
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
                <td>
                  {
                    campuses.filter(campus => campus.id === student.campusId).length ? campuses.filter(campus => campus.id === student.campusId)[0].name : '-'
                  }
                </td>
                <td>
                  <button onClick={() => onDelete(student)} type="submit" className="btn btn-xs btn-danger">Delete</button>
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

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete(student) {
      dispatch(removeStudentThunk(student));
    },
    onClick() {
      dispatch(showForm(true));
    },
    showForm() {
      dispatch(showForm(false));
    },
    fetchStudents() {
      dispatch(fetchStudents());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentTable));
