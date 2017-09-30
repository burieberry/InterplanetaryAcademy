import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStudent } from '../store';

class Student extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStudent(id);
  }

  componentWillReceiveProps(nextProps) {
    // console.log('will receive: ', nextProps);
    // const { id } = nextProps.match.params;
    // if (id !== this.props.student.id) {
      // this.props.fetchStudent(id);
    // }
  }

  render() {
    const { student, campus } = this.props;
    return (
      <section className="col-xs-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            { student.name }
          </div>
          <div className="panel-body">
            <ul className="list-unstyled">
              <li><a href={`mailTo:${ student.email }`}>{ student.email }</a></li>
              <li><strong>Campus:</strong> { campus }</li>
            </ul>
            <button className="btn btn-info">Edit</button>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
    campus: state.campus
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudent(id) {
      dispatch(fetchStudent(id));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Student));
