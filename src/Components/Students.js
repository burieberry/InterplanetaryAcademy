import React from 'react';
import { connect } from 'react-redux';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

const Students = (props) => {
  return (
    <section className="section col-xs-12">
      <h2 className="section-hed">Students</h2>
      <div className="row">
        <StudentTable { ...props } />
        <StudentForm { ...props } />
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students,
    form: state.form
  }
};

export default connect(mapStateToProps)(Students);
