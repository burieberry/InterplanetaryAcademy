import React from 'react';
import StudentForm from './StudentForm';
import StudentTable, { showForm } from './StudentTable';

const Students = (props) => {
  return (
    <section className="col-xs-12">
      <h2>Students</h2>
      <div className="row">
        <StudentTable { ...props } />
        <StudentForm { ...props } />
      </div>
    </section>
  );
}

export default Students;
