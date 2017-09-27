'use strict';
import React from 'react';

const Campuses = ({ campuses }) => {
  return (
    <section className="row">
      <ul className="col-xs-10 list-unstyled">
        {
          campuses.map(campus => {
            return (
              <li key={ campus.id } className="col-xs-6">
                <section className="panel panel-default">
                  <div className="panel-heading">
                    <h3>{ campus.name }</h3>
                  </div>
                  <div className="panel-body">
                    <img src={ campus.image } width="400" height="250" />
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
