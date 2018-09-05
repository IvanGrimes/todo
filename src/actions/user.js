import { SIGN_IN_REQUEST, SIGN_OUT } from '../constants/actionTypes';

export const signInRequest = (username, password) => ({
  type: SIGN_IN_REQUEST,
  payload: {
    username,
    password,
  },
});

export const signOut = () => ({
  type: SIGN_OUT,
  payload: {
    uid: null,
    auth: false,
    error: null,
  },
});
