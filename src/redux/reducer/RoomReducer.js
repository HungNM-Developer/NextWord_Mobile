import * as ActionType from '../ActionType';

export const roomReducer = (state = { isLoading: true, errMess: null, roomPin: '' }, action) => {
  switch (action.type) {
    case ActionType.ROOM_SUCCESSED:
      return { ...state, isLoading: false, errMess: null, roomPin: action.payload };
    case ActionType.ROOM_LOADING:
      return { ...state, isLoading: true, errMess: null, roomPin: '' }
    case ActionType.ROOM_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};