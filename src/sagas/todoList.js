import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { database } from '../firebase';
import snapshotToArray from '../utils/snapshotToArray';
import {
  GET_TODO_LIST_REQUEST,
  GET_TODO_LIST_SUCCESS,
  GET_TODO_LIST_FAIL,
} from '../constants/actionTypes';


function* fetchTodoList() {
  try {
    const uid = localStorage.getItem('uid');
    const todoList = yield call(
      () => (database.ref(`/users/${uid}/todolist`).once('value')
        .then(snapshot => snapshot.val())),
      null,
    );

    yield put({
      type: GET_TODO_LIST_SUCCESS,
      payload: snapshotToArray(todoList),
    });
  } catch (error) {
    yield put({
      type: GET_TODO_LIST_FAIL,
      payload: error.message,
    });
  }
}

const todoList = [
  takeLatest(GET_TODO_LIST_REQUEST, fetchTodoList),
];

export default todoList;
