import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeStudentThunk, showForm } from '../store';

const StudentTable = (props) => {
  const { students, campuses, form, onDelete, onAdd } = props;

  return (
    <section className="col-xs-8">
      <button onClick={ () => onAdd(form) } className="btn btn-primary pull-right">+</button>
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

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students,
    form: state.form
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete(student) {
      dispatch(removeStudentThunk(student));
    },
    onAdd(form) {
      dispatch(showForm(form));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentTable);
