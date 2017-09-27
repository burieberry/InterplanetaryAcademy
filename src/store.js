'use strict';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import thunk from 'redux-thunk';

// INITIAL STATE
const initialState = {
  campuses: []
};

// ACTION TYPE
const GET_CAMPUSES = 'GET_CAMPUSES';

// ACTION CREATOR
export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  }
};

// THUNK CREATOR
export const fetchCampuses = () => {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => dispatch(getCampuses(campuses)));
  }
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CAMPUSES:
      return Object.assign({}, state, { campuses: action.campuses });

    default:
      return state;
  }
};

// STORE
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));
export default store;
