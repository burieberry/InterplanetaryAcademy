import React, { Component } from 'react';
import store from '../store';

class StudentForm extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    this.setState({ input: ev.target.value });
  }

  render() {
    const { input } = this.state;
    const { campuses } = this.props;
    const { onChange } = this;

    return (
      <section className="col-xs-12">
        <h2>Add Student</h2>

        <form>
          <div className="form-group row">
            <label className="col-xs-3 col-form-label">Name: </label>
            <div className="col-xs-8">
              <input value={ input } onChange={ onChange } className="form-control" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-xs-3 col-form-label">Select Campus: </label>
            <div className="col-xs-8">
              <select className="form-control">
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

          <button className="btn btn-primary">Submit</button>
        </form>
      </section>
    );
  }
};

export default StudentForm;
