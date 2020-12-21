import * as ActionTypes from '../ActionType';
import {baseURL} from '../../shared/baseURL';


export const rankLoading = () => ({
    type: ActionTypes.RANK_LOADING,
});

export const rankGet = (data) => ({
    type: ActionTypes.RANK_SUCCESSED,
    payload: data
});

export const rankFail = (err) => ({
    type: ActionTypes.RANK_FAILED,
    payload: err
});

export const fetchRank = (rid) => (dispatch) => {
    console.log(rid);
    dispatch(rankLoading());
    return fetch(baseURL + '/room/' + rid, {
        method: 'GET', headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(res => {
        if(res.ok){
            return res;
        }
        else{
            let err = new Error('Error ' + res.status);
            err.respone = res;
            throw err;
        }
    }, err => {
        let errmess = new Error(err.message);
        throw errmess;
    })
    .then(res => res.json())
    .then(res => dispatch(rankGet(res)))
    .catch(err => dispatch(rankFail(err)));
}