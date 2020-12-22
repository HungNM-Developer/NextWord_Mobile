import * as ActionType from "../ActionType";

export const gameReducer = (state = { isLoading: true, errMess: null, turnUser: '' }, action) => {
  switch (action.type) {
    case ActionType.GAME_NEXTED:
      return { ...state, isLoading: false, errMess: null, turnUser: action.payload };
    default:
      return state;
  }
};