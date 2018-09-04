import { call, put, takeLatest } from 'redux-saga/effects';
import { authRef } from '../firebase';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SET_USER,
} from '../actions';

function* fetchUser(action) {
  try {
    const { email, password } = action.payload;
    const user = yield call(
      () => (authRef.signInWithEmailAndPassword(email, password)), action.payload.email,
    );

    yield put({
      type: SIGN_IN_SUCCESS,
      payload: user.user.uid,
    });
    yield put({
      type: SET_USER,
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
