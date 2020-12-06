import * as ActionTypes from '../ActionType';


export const userADD = (user) => {
    // console.log(user);
    return {
        type: ActionTypes.USER_ADDED,
        payload: user
    }
}

export const userDELETE = () => {
    return {
        type: ActionTypes.USER_DELETE,
    }
}


export const addUser = (user) => (dispatch) => {
    //console.log(user);
    dispatch(userADD(user));
}

