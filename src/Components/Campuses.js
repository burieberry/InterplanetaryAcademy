'use strict';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Campuses = ({ campuses }) => {
  return (
    <div className="section col-xs-12">
      <h2 className="section-hed">Campuses</h2>
      <ul className="campuses list-unstyled">
        {
          campuses.map(campus => {
            return (
              <li key={ campus.id } className="col-xs-4">
                <Link to={ `/campuses/${ campus.id }` }>
                  <div className="panel panel-default">
                    <h3 className="panel-heading">
                      { campus.name }
                    </h3>
                    <div className="panel-body">
                      <img src={ campus.image } height="175" width="308" />
                    </div>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <p className="pull-right small text-muted">Campus photos by <a href="http://rickandmorty.wikia.com/">rickandmorty.wikia.com</a></p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
};

export default withRouter(connect(mapStateToProps)(Campuses));
