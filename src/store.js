'use strict';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import thunk from 'redux-thunk';

// INITIAL STATE
const initialState = {
  campuses: [],
  students: [],
  form: false,
  campus: 'Earth',
  student: {}
};

// ACTION TYPE
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const SHOW_FORM = 'SHOW_FORM';
const EDIT_FORM = 'EDIT_FORM';
const SUBMIT_FORM = 'SUBMIT_FORM';
const EDIT_CAMPUS = 'EDIT_CAMPUS';

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

const removeStudent = () => {
  return {
    type: REMOVE_STUDENT
  }
};

export const showForm = () => {
  return {
    type: SHOW_FORM
  }
}

export const editForm = (student) => {
  return {
    type: EDIT_FORM,
    student
  }
}

export const submitForm = (campus) => {
  return {
    type: SUBMIT_FORM,
    campus
  }
}

export const editCampus = (campus) => {
  return {
    type: SUBMIT_FORM,
    campus
  }
}

// THUNK CREATOR
export const fetchCampuses = () => {
  return dispatch => {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => dispatch(getCampuses(campuses)));
  }
};

export const fetchStudents = () => {
  return dispatch => {
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

export const getCampusThunk = campusName => {
  return dispatch => {
    return axios.get(`/api/campuses/${campusName}`)
      .then(res => res.data)
      .then(campus => dispatch(submitForm(campus)))
  }
}

export const removeStudentThunk = (student) => {
  return dispatch => {
    return axios.delete(`/api/students/${student.id}`, student)
      .then(res => res.data)
      .then(() => dispatch(fetchStudents()))
      .then(() => dispatch(removeStudent()))
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

    case REMOVE_STUDENT:
      return Object.assign({}, state, { students: [ ...state.students ] });

    case SHOW_FORM:
      return Object.assign({}, state, { form: true });

    case EDIT_FORM:
      return Object.assign({}, state, { student: action.student });

    case SUBMIT_FORM:
      return Object.assign({}, state, { campus: action.campus });

    case EDIT_CAMPUS:
      return Object.assign({}, state, { campus: action.campus });

    default:
      return state;
  }
};

// STORE
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));
export default store;
