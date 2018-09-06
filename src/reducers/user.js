import {
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP_REQUEST,
} from '../constants/actionTypes';

const initialState = {
  uid: localStorage.getItem('uid') || null,
  auth: !!localStorage.getItem('uid'),
  error: '',
  isFetching: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        error: '',
        isFetching: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        uid: action.payload,
        auth: true,
        isFetching: false,
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case SIGN_OUT:
      localStorage.removeItem('uid');
      return {
        ...state,
        ...action.payload,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    default:
      return state;
  }
}
