import { combineReducers } from 'redux';
import signIn from './signIn';
import user from './user';

const reducer = combineReducers({
  signIn,
  user,
});

export default reducer;
