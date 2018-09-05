import { call, put, takeLatest } from 'redux-saga/effects';
import { authRef } from '../firebase';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} from '../constants/actionTypes';

function* fetchUser(action) {
  try {
    const { username, password } = action.payload;
    const user = yield call(
      () => authRef().signInWithEmailAndPassword(username, password),
      action.payload.username,
    );

    localStorage.setItem('uid', user.user.uid);

    yield put({
      type: SIGN_IN_SUCCESS,
      payload: user.user.uid,
    });
  } catch (error) {
    localStorage.removeItem('uid');

    yield put({
      type: SIGN_IN_FAIL,
      payload: error.message,
    });
  }
}

export const signIn = [
  takeLatest(SIGN_IN_REQUEST, fetchUser),
];
