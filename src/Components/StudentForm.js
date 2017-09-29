import React, { Component } from 'react';
import store, { addStudentThunk } from '../store';

class StudentForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedName: '',
      selectedCampus: 'Earth'
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    console.log(store.getState());
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  onChange(ev) {
    const name = ev.target.name;

    this.setState({
      [name]: ev.target.value
    });
  }

  onSubmit(ev) {
    ev.preventDefault();
    const { selectedName, selectedCampus, campuses } = this.state;
    const campus = campuses.filter(camp => { return camp.name === selectedCampus });
    store.dispatch(addStudentThunk({ name: selectedName, campusId: campus[0].id }));
  }

  render() {
    const { selectedName, selectedCampus } = this.state;
    const { campuses } = this.props;
    const { onChange, onSubmit } = this;

    return (
      <section className="panel panel-default">
        <h3 className="panel-heading" style={{ margin: 0 }} >Add Student</h3>

        <form onSubmit={ onSubmit } className="panel-body">
          <div className="form-group row">
            <label className="col-xs-3 col-form-label">Name: </label>
            <div className="col-xs-8">
              <input value={ selectedName } name="selectedName" type="text" onChange={ onChange } className="form-control" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-xs-3 col-form-label">Select Campus: </label>
            <div className="col-xs-8">
              <select value={ selectedCampus } name="selectedCampus" onChange={ onChange } className="form-control">
                {
                  campuses.map(campus => {
                    return (
                      <option key={ campus.id }>{ campus.name }</option>
                    );
                  })
                }
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>
    );
  }
};

export default StudentForm;
