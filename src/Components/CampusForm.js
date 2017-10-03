import React from 'react';
import { connect } from 'react-redux';
import { editForm, addCampusThunk, showForm } from '../store';

const AddCampus = ({ campus, form, title, onChange, onSubmit, onClose }) => {
  return (
    <section className="col-xs-12 col-sm-6">
      {
        form && (
          <div className="panel panel-default">
            <h3 className="panel-heading">{ title }</h3>

            <form onSubmit={ onSubmit } className="panel-body">
              <div className="form-group row">
                <label className="col-xs-3 col-form-label">Name: </label>
                <div className="col-xs-8">
                  <input name="name" value={ campus.name } onChange={ onChange } className="form-control" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-xs-3 col-form-label">Image URL: </label>
                <div className="col-xs-8">
                  <input name="image" value={ campus.image } onChange={ onChange } className="form-control" />
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
    form: state.form,
    campus: {}
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
      const image = ev.target.image.value;
      dispatch(showForm(false));
      dispatch(addCampusThunk({ name, image }));
    },
    onClose() {
      dispatch(showForm(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);
