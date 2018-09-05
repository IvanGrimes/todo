export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';

export const signIn = (username, password) => ({
  type: SIGN_IN_REQUEST,
  payload: {
    username,
    password,
  },
});
