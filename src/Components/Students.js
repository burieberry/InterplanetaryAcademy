import React from 'react';

const Students = ({ students, campuses }) => {
  return (
    <section className="col-xs-8">
      <h2 style={{ paddingBottom: '18px' }}>Students</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Campus</th>
          </tr>
        </thead>
        <tbody>
        {
          students.map(student => {
            return (
              <tr key={ student.id }>
                <td>{ student.id }</td>
                <td><strong>{ student.name }</strong></td>
                <td><a href={`mailTo:${ student.email }`}>{ student.email }</a></td>
                <td>
                  {
                    campuses.filter(campus => campus.id === student.campusId).length ?
                    campuses.filter(campus => campus.id === student.campusId)[0].name
                    : '-'
                  }
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </section>
  );
}

export default Students;
