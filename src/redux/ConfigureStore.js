import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {roomReducer } from './reducer/RoomReducer';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({roomReducer}),
    applyMiddleware(thunk, logger)
  );
  return store;
};