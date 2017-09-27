'use strict';
import React from 'react';

const Campuses = ({ campuses }) => {
  return (
    <section className="col-xs-10">
      <h2 style={{ paddingBottom: '18px' }}>Campuses</h2>
      <ul className="list-unstyled">
        {
          campuses.map(campus => {
            return (
              <li key={ campus.id } className="col-xs-4">
                <section className="panel panel-default">
                  <h3 className="panel-heading" style={{ marginTop: '0' }}>
                    { campus.name }
                  </h3>
                  <div className="panel-body">
                    <img src={ campus.image } width="100%" />
                  </div>
                </section>
              </li>
            )
          })
        }
      </ul>
    </section>
  );
}

export default Campuses;
