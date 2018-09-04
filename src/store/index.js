import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import { signIn } from '../sagas';

const saga = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(saga, logger),
);

window.store = store; // TODO: Delete when you finished

saga.run(signIn);

export default store;
