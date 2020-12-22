import { baseURL } from '../../shared/baseURL';
import * as ActionTypes from '../ActionType';


export const userADD = (user) => {
    console.log(user);
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


export const addUser = (user) => async (dispatch) => {
    //console.log(user);
    fetch(baseURL + "/user",
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': user.id,
                'name': user.name,
                'photo': user.photo,
                'email': user.email
            })
        },
    )
    // .then(res => console.log(res.json()));
    dispatch(userADD(user));
}

