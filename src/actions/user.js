import { SIGN_IN_REQUEST } from '../constants/actionTypes';

export const signInRequest = (username, password) => ({
  type: SIGN_IN_REQUEST,
  payload: {
    username,
    password,
  },
});
