'use strict';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CampusForm from './CampusForm';
import { fetchCampuses, showForm, removeCampusThunk } from '../store';

class Campuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Add Campus'
    };
  }

  componentDidMount() {
    this.props.fetchCampuses();
    this.props.showForm();
  }

  render() {
    return (
      <CampusesList { ...this.props } { ...this.state } />
    )
  }
}

const CampusesList = (props) => {
  const { campuses, onClick, onDelete } = props;
  return (
    <div className="section col-xs-12">
      <h2 className="section-hed col-xs-12">Campuses</h2>
      <button onClick={ onClick } className="campus-add-btn btn btn-primary">Add New Campus +</button>
      <div className="row campus-add-form">
        <div className="col-sm-6" />
        <CampusForm  { ...props } />
      </div>

      <ul className="campuses list-unstyled">
        {
          campuses.map(campus => {
            return (
              <li key={ campus.id } className="campus-panel col-xs-12 col-sm-6 col-md-4">
                <button onClick={() => onDelete(campus)} type="submit" className="btn btn-xs  btn-danger remove-btn"><span className="glyphicon glyphicon-remove" /></button>
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
    campuses: state.campuses,
    title: state.title
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete(campus) {
      dispatch(removeCampusThunk(campus));
    },
    onClick() {
      dispatch(showForm(true));
    },
    showForm() {
      dispatch(showForm(false));
    },
    fetchCampuses() {
      dispatch(fetchCampuses());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Campuses));
