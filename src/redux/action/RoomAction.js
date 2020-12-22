import * as ActionTypes from '../ActionType';
import {baseURL} from '../../shared/baseURL';

export const roomLoading = () => ({
    type: ActionTypes.ROOM_LOADING,
});

export const roomGet = (roomPin) => ({
    type: ActionTypes.ROOM_SUCCESSED,
    payload: roomPin
});

export const roomFail = (err) => ({
    type: ActionTypes.ROOM_FAILED,
    payload: err
});

export const fetchRoomPin = () => (dispatch) => {
    dispatch(roomLoading());
    //console.log(baseURL);
    return fetch(baseURL + '/newroom', {
        method: 'POST', headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(res => {
        // console.log(res.ok);
        if (res.ok) {
            return res;
        }
        else {
            let err = new Error('Error ' + res.status);
            err.respone = res;
            throw err;
        }
    }, err => {
        let errmess = new Error(err.message);
        throw errmess;
    })
        .then(res => res.json())
        .then(roomPin => dispatch(roomGet(roomPin)))
        .catch(err => dispatch(roomFail(err)));
};

export const joinRoom = (roomPin) => (dispatch) => {
    return dispatch(roomGet(roomPin));
}