import * as ActionTypes from '../ActionType';
import {baseURL} from '../../shared/baseURL';

export const roomLoading = () => ({
    type: ActionTypes.ROOM_LOADING,
});

export const roomGet = (room) => ({
    type: ActionTypes.ROOM_SUCCESSED,
    payload: room
});

export const roomFail = (err) => ({
    type: ActionTypes.ROOM_FAILED,
    payload: err
});

export const joinRoomPin = (rid) => (dispatch) => {
    dispatch(roomLoading());
    //console.log(baseURL);
    return fetch(baseURL + '/newroom/'+rid, {
        method: 'GET', headers: {
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
        .then(room => dispatch(roomGet(room)))
        .catch(err => dispatch(roomFail(err)));
};


export const fetchRoomPin = (uid) => (dispatch) => {
    dispatch(roomLoading());
    console.log(uid);
    return fetch(baseURL + '/newroom', {
        method: 'POST', headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: uid
        })
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
        .then(room => dispatch(roomGet(room)))
        .catch(err => dispatch(roomFail(err)));
};
// export const joinRoom = (roomPin) => (dispatch) => {
//     return dispatch(roomGet(roomPin));
// }