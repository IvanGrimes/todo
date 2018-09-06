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
  TOGGLE_TODO_STATE,
  DELETE_TODO,
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
function* toggleTodoState(action) { // TODO: Добавить request, success,fail, выводить ошибку
  yield call(
    () => database.ref(`users/${localStorage.getItem('uid')}/todolist/${action.payload.id}`)
      .update({
        completed: action.payload.completed,
      }),
    action.payload,
  );
}

function* deleteTodo(action) { // TODO: Добавить request, success,fail, выводить ошибку
  yield call(
    () => database.ref(`users/${localStorage.getItem('uid')}/todolist/${action.payload}`).remove(),
    action.payload,
  );
}

export const todoList = [
  takeLatest(GET_TODO_LIST_REQUEST, fetchTodoList),
  takeLatest(TOGGLE_TODO_STATE, toggleTodoState),
  takeLatest(DELETE_TODO, deleteTodo),
];
