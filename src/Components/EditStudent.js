import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editForm, updateStudent, fetchStudent } from '../store';

// class EditStudent extends Component {
//   componentDidMount() {
//     const { id } = this.props.match.params;
//     this.props.fetchStudent(id);
//   }

//   componentWillReceiveProps(nextProps) {
//     const { id } = nextProps.match.params;

//     if (id !== this.props.match.params.id) {
//       this.props.fetchStudent(id);
//     }
//   }

//   render() {
//     return (
//       <StudentFormContainer { ...this.props } />
//     )
//   }
// }

const EditStudent = ({ student, campuses, form, onChange, onSubmit }) => {
  console.log(student)
  return (
    <section className="col-xs-4">
      {
        form && (
          <div className="panel panel-default">
            <h3 className="panel-heading" style={{ margin: 0 }} >Edit Student</h3>

            <form onSubmit={ onSubmit } className="panel-body">
              <div className="form-group row">
                <label className="col-xs-3 col-form-label">Name: </label>
                <div className="col-xs-8">
                  <input name="name" defaultValue={ student.name } onChange={ onChange } className="form-control" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-xs-3 col-form-label">Email: </label>
                <div className="col-xs-8">
                  <input name="email" defaultValue={ student.email } onChange={ onChange } className="form-control" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-xs-3 col-form-label">Select Campus: </label>
                <div className="col-xs-8">
                  <select name="campus" defaultValue={ student.campusId * 1 } onChange={ onChange } className="form-control">
                    {
                      campuses.map(campus => {
                        return (
                          <option value={ campus.id * 1 } key={ campus.id }>{ campus.name }</option>
                        );
                      })
                    }
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        )
      }
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    student: state.student,
    form: state.form
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange(ev) {
      dispatch(editForm(ev.target.value));
    },
    onSubmit(ev) {
      ev.preventDefault();
      const name = ev.target.name.value;
      const campusId = ev.target.campus.value * 1;
      const email = ev.target.email.value;
      const { id } = ownProps.match.params;
      dispatch(updateStudent(id, { name, email, campusId }));
    },
    // fetchStudent(id) {
    //   dispatch(fetchStudent(id));
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
