import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/rootReducer';
import signIn from '../sagas/signIn';

export const history = createHistory();
const saga = createSagaMiddleware();

const middleware = applyMiddleware(
  routerMiddleware(history),
  saga,
  logger,
);

const store = createStore(
  rootReducer,
  middleware,
);

window.store = store; // TODO: Delete when you finished

saga.run(signIn);

export default store;
