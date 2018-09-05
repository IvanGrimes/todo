import { call, put, takeLatest } from 'redux-saga/effects';
import { authRef, authPersistance } from '../firebase';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} from '../actions';

function* fetchUser(action) {
  try {
    const { username, password } = action.payload;
    const user = yield call(
      () => (
        authRef().setPersistence(authPersistance)
          .then(() => authRef().signInWithEmailAndPassword(username, password))
      ),
      action.payload.username,
    );

    yield put({
      type: SIGN_IN_SUCCESS,
      payload: user.user.uid,
    });

    localStorage.setItem('uid', user.user.uid);
  } catch (error) {
    localStorage.removeItem('uid');

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
