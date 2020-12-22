import * as ActionType from "../ActionType";

export const rankReducer = (state = { isLoading: true, errMess: null, rank: '' }, action) => {
  switch (action.type) {
    case ActionType.RANK_SUCCESSED:
      return { ...state, isLoading: false, errMess: null, rank: action.payload };
    case ActionType.RANK_LOADING:
      return { ...state, isLoading: true, errMess: null, rank: '' }
    case ActionType.RANK_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};