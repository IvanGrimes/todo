import { all } from 'redux-saga/effects';
import { signIn } from './signIn';
import { signUp } from './signUp';
import { todoList } from './todoList';

export default function* rootSaga() {
  yield all([
    ...signIn,
    ...signUp,
    ...todoList,
  ]);
}
