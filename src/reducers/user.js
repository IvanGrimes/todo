import {
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from '../actions';

const initialState = {
  uid: localStorage.getItem('uid') || null,
  auth: !!localStorage.getItem('uid'),
  error: null,
};

export default function signIn(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
        return {
          ...state,
          error: null,
        };
    case SIGN_IN_SUCCESS:
        return {
          ...state,
          uid: action.payload,
          auth: true,
        };
    case SIGN_IN_FAIL:
        return {
          ...state,
          error: action.payload,
        };
    default:
      return state;
  }
}
