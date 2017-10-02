import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStudent, showForm } from '../store';
import EditStudent from './EditStudent';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Edit Student' };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStudent(id);
    this.props.showForm();
  }

  componentWillReceiveProps(nextProps) {
    const { id } = nextProps.match.params;

    if (id !== this.props.match.params.id) {
      this.props.fetchStudent(id);
    }
  }

  render() {
    const { title } = this.state;
    return (
      <div className="row">
        <StudentDetail { ...this.props } />
        <EditStudent { ...this.props } title={ title } />
      </div>
    )
  }
}

const StudentDetail = ({ student, campuses, onClick }) => {
  student.campusId *= 1;
  const campusName = campuses.filter(campus => campus.id === student.campusId).length ? campuses.filter(campus => campus.id === student.campusId)[0].name : '-'

  return (
    <section className="col-xs-4">
      <div className="panel panel-default">
        <div className="panel-heading">
          { student.name }
        </div>
        <div className="panel-body">
          <ul className="list-unstyled">
            <li name="email"><a href={`mailTo:${ student.email }`}>{ student.email }</a></li>
            <li><strong>Campus: </strong>{ campusName }</li>
          </ul>
          <button onClick={ () => onClick(student.id) } className="btn btn-info">Edit</button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    student: state.student,
    campuses: state.campuses,
    form: state.form
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchStudent(id) {
      dispatch(fetchStudent(id));
    },
    showForm() {
      dispatch(showForm(false));
    },
    onClick(id) {
      dispatch(showForm(true));
      dispatch(fetchStudent(id));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Student));
