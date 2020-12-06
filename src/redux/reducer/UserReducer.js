import * as ActionType from '../ActionType';

export const userReducer = (state = { user: '' }, action) => {
    switch (action.type) {
        case ActionType.USER_ADDED:
            return { ...state, user: action.payload };
        case ActionType.USER_DELETE:
            return { ...state, user: '' };
        default:
            return state;
    }
}