import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchCampus, showForm, fetchStudents } from '../store';
import EditCampus from './EditCampus';

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Edit Campus'
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCampus(id);
    this.props.showForm();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.student.id !== this.props.student.id) {
      this.props.fetchStudents();
    }
  }

  render() {
    const { campus } = this.props;
    return (
      <div className="row">
        <h2 className="section-hed">Campus: { campus.name }</h2>
        <CampusDetail { ...this.props } />
        <EditCampus { ...this.props } { ...this.state } />
      </div>
    )
  }
}

const CampusDetail = ({ campus, students, onClick }) => {
  const studentsArr = students.filter(student => campus.id === student.campusId).length ? students.filter(student => campus.id === student.campusId) : null;

  return (
    <section className="col-md-8">
        <div className="campus-panel panel panel-default">
          <div className="panel-body">
            <div className="col-sm-6 col-md-8">
              <img src={ campus.image || 'https://placeimg.com/616/350/arch' } width="100%" />
            </div>
            <div className="col-sm-6 col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">Current Students:</div>
                <div className="panel-body">
                  <ul className="list-unstyled">
                    {
                      studentsArr ? studentsArr.map(student => {
                        return (
                          <li key={ student.id }>• { student.name }</li>
                        )
                      }) : <li>No enrolled students.</li>
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="campus-btn-group pull-right">
              <Link to="/campuses"><button className="back-btn btn btn-default"><span className="glyphicon glyphicon-circle-arrow-left" /> Back</button></Link>
              <button onClick={ () => onClick(campus.id) } className="btn btn-info"><span className="glyphicon glyphicon-pencil" /> Edit</button>
            </div>
          </div>
        </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.students,
    student: state.student,
    campus: state.campus,
    form: state.form
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampus(id) {
      dispatch(fetchCampus(id));
    },
    fetchStudents() {
      dispatch(fetchStudents());
    },
    showForm() {
      dispatch(showForm(false));
    },
    onClick(id) {
      dispatch(showForm(true));
      dispatch(fetchCampus(id));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Campus));
