'use strict';
import React from 'react';

const Campuses = ({ campuses }) => {
  return (
    <section className="row">
      <ul className="col-xs-10 list-unstyled">
        {
          campuses.map(campus => {
            return (
              <li key={ campus.id } className="col-xs-4">
                <section className="panel panel-default">
                  <h4 className="panel-heading" style={{ marginTop: '0' }}>
                    { campus.name }
                  </h4>
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
