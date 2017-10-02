import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchCampus, showForm } from '../store';
// import EditCampus from './EditCampus';

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Edit Campus' };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCampus(id);
    this.props.showForm();
  }

  componentWillReceiveProps(nextProps) {
    const { id } = nextProps.match.params;

    if (id !== this.props.match.params.id) {
      this.props.fetchCampus(id);
    }
  }

  render() {
    const { title } = this.state;
    return (
      <div className="row">
        <CampusDetail { ...this.props } title={ title } />

      </div>
    )
  }
}

const CampusDetail = ({ campus, students, onClick }) => {
  const studentsArr = students.filter(student => campus.id === student.campusId).length ? students.filter(student => campus.id === student.campusId) : null;

  console.log(studentsArr)

  return (
    <section className="col-xs-8">
      <h2 className="section-hed">Campus: { campus.name }</h2>
        <div className="campus-panel panel panel-default">
          <div className="panel-body">
            <div className="col-xs-8">
              <img src={ campus.image } height="300" />
            </div>
            <div className="col-xs-4">
            <div className="panel panel-default">
              <div className="panel-heading">Current Students:</div>
                <div className="panel-body">
                  <ul className="list-unstyled">
                    {
                      studentsArr ? studentsArr.map(student => {
                        return (
                          <li key={ student.id }>{ student.name }</li>
                        )
                      }) : <li>No enrolled students.</li>
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="campus-btn-group pull-right">
              <button className="back-btn btn btn-default"><Link to="/campuses"><span className="glyphicon glyphicon-circle-arrow-left" /> Back</Link></button>
              <button onClick={ () => onClick(campus.id) } className="btn btn-info"> <span className="glyphicon glyphicon-pencil" /> Edit</button>
            </div>
          </div>
        </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.students,
    campus: state.campus,
    form: state.form
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampus(id) {
      dispatch(fetchCampus(id));
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
