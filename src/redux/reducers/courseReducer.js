import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
