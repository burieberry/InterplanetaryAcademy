import React from 'react';

const Student = ({ student, campus }) => {
  return (
    <section className="col-xs-8">
    <button onClick={} className="btn btn-info pull-right">Edit</button>
      <div className="panel panel-default">
        <div className="panel-heading">
          { student.name }
        </div>
        <div className="panel-body">
          <ul className="list-unstyled">
            <li>{ student.email }</li>
            <li>Campus: { campus }</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Student;
