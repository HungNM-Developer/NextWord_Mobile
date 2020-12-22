import * as ActionTypes from '../ActionType';
import {baseURL} from '../../shared/baseURL';


export const GameNext = (data) => ({
    type: ActionTypes.GAME_NEXTED,
    payload: data
});


export const nextUser = (data) => (dispatch) => {
    console.log("debug redux");
    console.log(data);
    return dispatch(GameNext(data));
}