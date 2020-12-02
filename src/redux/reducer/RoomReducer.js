import * as ActionTypes from './ActionTypes';

export const roomReducer = (state = { isLoading: true, errMess: null, leaders: [] }, action) => {
  switch (action.type) {
    // case ActionTypes.:
    //   return { ...state, isLoading: false, errMess: null, leaders: action.payload };
    case ActionTypes.ROOM_LOADING:
      return { ...state, isLoading: true, errMess: null, leaders: [] }
    case ActionTypes.ROOM_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};