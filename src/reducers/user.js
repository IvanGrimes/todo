import {
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
} from '../constants/actionTypes';

const initialState = {
  uid: localStorage.getItem('uid') || null,
  auth: !!localStorage.getItem('uid'),
  error: null,
};

export default function user(state = initialState, action) {
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
    case SIGN_OUT:
      localStorage.removeItem('uid');
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
