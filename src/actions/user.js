import { SIGN_IN_REQUEST, SIGN_OUT, SIGN_UP_REQUEST } from '../constants/actionTypes';

export const signInRequest = (email, password) => ({
  type: SIGN_IN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const signOut = () => ({
  type: SIGN_OUT,
  payload: {
    uid: null,
    auth: false,
    error: '',
  },
});

export const signUpRequest = (email, password) => ({
  type: SIGN_UP_REQUEST,
  payload: {
    email,
    password,
  },
});
