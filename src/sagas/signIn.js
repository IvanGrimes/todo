import { call, put, takeLatest } from 'redux-saga/effects';
import { authRef } from '../firebase';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  AUTH_USER,
} from '../actions';

function* fetchUser(action) {
  try {
    const { username, password } = action.payload;
    const user = yield call(
      () => (authRef.signInWithEmailAndPassword(username, password)), action.payload.username,
    );

    yield put({
      type: SIGN_IN_SUCCESS,
      payload: user.user.uid,
    });

    yield put({
      type: AUTH_USER,
      payload: user.user,
    });
  } catch (error) {
    yield put({
      type: SIGN_IN_FAIL,
      payload: error.message,
    });
  }
}

function* signIn() {
  yield takeLatest(SIGN_IN_REQUEST, fetchUser);
}

export default signIn;
