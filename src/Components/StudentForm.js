import React, { Component } from 'react';
import store, { addStudentThunk } from '../store';

class StudentForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedName: '',
      selectedCampus: {}
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
    const target = ev.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit(ev) {
    ev.preventDefault();
    const { selectedName, selectedCampus, campuses } = this.state;
    const campus = campuses.filter(camp => { return camp.name === selectedCampus })[0];
    store.dispatch(addStudentThunk({ name: selectedName, campusId: campus.id }));
  }

  render() {
    const { selectedName, selectedCampus } = this.state;
    const { campuses } = this.props;
    const { onChange, onSubmit } = this;

    return (
      <section className="col-xs-12">
        <h2>Add Student</h2>

        <form onSubmit={ onSubmit }>
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
