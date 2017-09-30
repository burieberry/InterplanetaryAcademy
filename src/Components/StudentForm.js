import React from 'react';
import { connect } from 'react-redux';
import { addStudentThunk, editForm } from '../store';

const StudentForm = ({ campuses, form, onChange, onSubmit }) => {

  return (
    <section className="col-xs-4">
      {
        form && (
          <div className="panel panel-default">
            <h3 className="panel-heading" style={{ margin: 0 }} >Add Student</h3>

            <form onSubmit={ onSubmit } className="panel-body">
              <div className="form-group row">
                <label className="col-xs-3 col-form-label">Name: </label>
                <div className="col-xs-8">
                  <input name="name" type="text" onChange={ onChange } className="form-control" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-xs-3 col-form-label">Email: </label>
                <div className="col-xs-8">
                  <input name="email" type="text" onChange={ onChange } className="form-control" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-xs-3 col-form-label">Select Campus: </label>
                <div className="col-xs-8">
                  <select name="campus" onChange={ onChange } className="form-control">
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
    campuses: state.campuses
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(ev) {
      dispatch(editForm(ev.target.value));
    },
    onSubmit(ev) {
      ev.preventDefault();
      const name = ev.target.name.value;
      const campusId = ev.target.campus.value;
      const email = ev.target.email.value;
      dispatch(addStudentThunk({ name, email, campusId }));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
