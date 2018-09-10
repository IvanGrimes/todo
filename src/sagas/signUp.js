import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { authRef } from '../firebase';
import {
  SIGN_UP_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} from '../constants/actionTypes';

function* createUser(action) {
  try {
    const { email, password } = action.payload;
    const user = yield call(
      () => authRef().createUserWithEmailAndPassword(email, password),
      action.payload.email,
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

const signUp = [
  takeLatest(SIGN_UP_REQUEST, createUser),
];

export default signUp;
