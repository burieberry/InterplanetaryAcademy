import React, { Component } from 'react';

class StudentForm extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  render() {
    const { input } = this.state;
    const { campuses } = this.props;

    return (
      <section className="col-xs-8">
        <h2>Add Student</h2>

        <form>
          <label>Name: </label>
          <input value={ input } />

          <label>Select Campus: </label>
          <select>
            {
              campuses.map(campus => {
                return (
                  <option key={ campus.id }>{ campus.name }</option>
                );
              })
            }
          </select>
        </form>
      </section>
    );
  }
};

export default StudentForm;
