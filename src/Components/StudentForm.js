import React from 'react';
import { connect } from 'react-redux';
import { editForm, addStudentThunk, showForm } from '../store';

const EditStudent = ({ student, campuses, form, title, onChange, onSubmit, onClose }) => {
  return (
    <section className="col-xs-12 col-sm-6 col-md-4">
      {
        form && (
          <div className="panel panel-default">
            <h3 className="panel-heading">Add Student</h3>

            <form onSubmit={ onSubmit } className="panel-body">
              <div className="form-group row">
                <label className="col-xs-3 col-form-label">Name: </label>
                <div className="col-xs-8">
                  <input name="name" value={ student.name } onChange={ onChange } className="form-control" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-xs-3 col-form-label">Email: </label>
                <div className="col-xs-8">
                  <input name="email" value={ student.email } onChange={ onChange } className="form-control" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-xs-3 col-form-label">Select Campus: </label>
                <div className="col-xs-8">
                  <select name="campusId" onChange={ onChange } className="form-control">
                    {
                      campuses.map(campus => {
                        return (
                          <option value={ campus.id } key={ campus.id }>{ campus.name }</option>
                        );
                      })
                    }
                  </select>
                </div>
              </div>
              <div className="pull-right">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button onClick={() => onClose()} className="close-btn btn btn-danger">Close</button>
              </div>
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
    form: state.form,
    student: {}
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange(ev) {
      const { name } = ev.target;
      dispatch(editForm({ [name]: ev.target.value }));
    },
    onSubmit(ev) {
      ev.preventDefault();
      const name = ev.target.name.value;
      const email = ev.target.email.value;
      const campusId = ev.target.campusId.value * 1;
      dispatch(showForm(false));
      dispatch(addStudentThunk({ name, email, campusId }));
    },
    onClose() {
      dispatch(showForm(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
