import React from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

const Students = (props) => {
  return (
    <section className="col-xs-12">
      <div className="row">
        <h2>Students</h2>
        <StudentTable { ...props } />
        <StudentForm { ...props } />
      </div>
    </section>
  );
}

export default Students;
