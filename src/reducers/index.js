import { combineReducers } from 'redux';
import signIn from './user';

const reducer = combineReducers({
  user: signIn,
});

export default reducer;
