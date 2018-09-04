import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';

const saga = createSagaMiddleware();

const index = createStore(
  reducer,
  applyMiddleware(saga, logger)
);

window.store = index; // TODO: Delete when you finished

export default index;
