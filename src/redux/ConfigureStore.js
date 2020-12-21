import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {roomReducer } from './reducer/RoomReducer';
import {userReducer} from './reducer/UserReducer';
import {rankReducer} from './reducer/RankReducer';
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({roomReducer,userReducer, rankReducer}),
    applyMiddleware(thunk, logger)
  );
  return store;
};