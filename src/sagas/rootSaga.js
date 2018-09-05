import { all } from 'redux-saga/effects';
import { signIn } from './signIn';
import { getTodoList } from './getTodoList';

export default function* rootSaga() {
  yield all([
    ...signIn,
    ...getTodoList,
  ]);
}
