import { all } from 'redux-saga/effects';
import { signIn } from './signIn';
import { signUp } from './signUp';
import { getTodoList } from './getTodoList';

export default function* rootSaga() {
  yield all([
    ...signIn,
    ...signUp,
    ...getTodoList,
  ]);
}
