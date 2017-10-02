import React from 'react';
import { connect } from 'react-redux';
import { editForm, updateStudent, showForm } from '../store';

const EditStudent = ({ student, campuses, form, title, onChange, onSubmit, onClose }) => {
  return (
    <section className="col-xs-12 col-sm-6 col-md-4">
      {
        form && (
          <div className="panel panel-default">
            <h3 className="panel-heading">{ title }</h3>

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
                  <select name="campusId" value={ student.campusId * 1 } onChange={ onChange } className="form-control">
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
    student: state.student,
    form: state.form
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange(ev) {
      const change = {};
      change[ev.target.name] = ev.target.value;
      const student = Object.assign(ownProps.student, change);
      dispatch(editForm(student));
    },
    onSubmit(ev) {
      ev.preventDefault();
      const name = ev.target.name.value;
      const email = ev.target.email.value;
      const campusId = ev.target.campusId.value * 1;
      const { id } = ownProps.match.params;
      dispatch(showForm(false));
      dispatch(updateStudent(id, { name, email, campusId }));
    },
    onClose() {
      dispatch(showForm(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
