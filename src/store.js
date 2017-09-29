'use strict';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import thunk from 'redux-thunk';

// INITIAL STATE
const initialState = {
  campuses: [],
  students: []
};

// ACTION TYPE
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';

// ACTION CREATOR
const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  }
};

const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students
  }
};

const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    student
  }
};

// THUNK CREATOR
export const fetchCampuses = () => {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => dispatch(getCampuses(campuses)));
  }
};

export const fetchStudents = () => {
  return function thunk(dispatch) {
    return axios.get('api/students')
      .then(res => res.data)
      .then(students => dispatch(getStudents(students)));
  }
};

export const addStudentThunk = (student) => {
  return dispatch => {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => dispatch(addStudent(newStudent)))
  }
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return Object.assign({}, state, { campuses: action.campuses });

    case GET_STUDENTS:
      return Object.assign({}, state, { students: action.students });

    case ADD_STUDENT:
      return Object.assign({}, state, { students: [ ...state.students, action.student ] });

    default:
      return state;
  }
};

// STORE
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));
export default store;
