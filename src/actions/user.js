export const SIGN_IN = 'SIGN_IN';

export const setUser = data => ({
  type: SIGN_IN,
  payload: data,
});
