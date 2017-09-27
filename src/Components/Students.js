import React from 'react';

const Students = ({ students, campuses }) => {
  return (
    <ul className="col-xs-10 list-group">
      {
        students.map(student => {
          return (
            <li key={ student.id } className="list-group-item">
              <ul className="list-unstyled">
                <li>
                  <strong>{ student.name }</strong>
                </li>
                <li>
                  <a href={`mailTo:${ student.email }`}>{ student.email }</a>
                </li>
                <li>{
                  campuses.filter(campus => campus.id === student.campusId).length ?
                    campuses.filter(campus => campus.id === student.campusId)[0].name
                    : null
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
