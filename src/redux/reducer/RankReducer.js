import * as ActionTypes from "../ActionType";

export const rankReducer = (state = { isLoading: true, errMess: null, payload = ''}, action) => {
    switch (action.type) {
      case ActionType.RANK_SUCCESSED:
        return { ...state, isLoading: false, errMess: null, payload: action.payload };
      case ActionType.RANK_LOADING:
        return { ...state, isLoading: true, errMess: null, payload: '' }
      case ActionType.RANK_FAILED:
        return { ...state, isLoading: false, errMess: action.payload };
      default:
        return state;
    }
  };