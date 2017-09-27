import React from 'react';

const Students = ({ students, campuses }) => {
  return (
    <ul className="col-xs-10 list-group">
      {
        students.map(student => {
          return (
            <li key={ student.id } className="list-group-item">
              { student.name }
              <ul className="list-unstyled">
                <li>{ student.email }</li>
                <li>{
                  campuses.filter(campus => campus.id === student.campusId).length ?
                    campuses.filter(campus => campus.id === student.campusId)[0].name
                    : 'no campus'
                }</li>
              </ul>

            </li>
          )
        })
      }
    </ul>
  );
}

export default Students;
