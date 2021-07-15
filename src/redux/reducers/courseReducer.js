import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
