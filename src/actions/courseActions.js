import * as types from '../actions/actionTypes';
import cousrseApi from '../api/mockCourseApi';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusActions";

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSES_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSES_SUCCESS, course};
}

export function loadCourses(dispatch) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return cousrseApi.getAllCourses().then(courses => {
      // eslint-disable-next-line no-undef
      dispatch(loadCoursesSuccess(courses));
    }).catch(error =>{
      // dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}


export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return cousrseApi.saveCourse(course).then(savedCourse=>{
     course.id?  dispatch(updateCourseSuccess(savedCourse)):
       dispatch(createCourseSuccess(savedCourse))
    }).catch(error=>{
      dispatch(ajaxCallError(error));
      throw(error);
    });
  }
}
