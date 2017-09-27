'use strict';
import { createStore } from 'redux';
import axios from 'axios';


const initialState = {
  campuses: []
};

const GET_CAMPUSES = 'GET_CAMPUSES';

const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  }
};

export const fetchCampuses = () => {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => dispatch(getCampuses(campuses)));
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CAMPUSES:
      return action.campuses

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
