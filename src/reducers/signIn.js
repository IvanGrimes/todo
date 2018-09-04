import {
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from '../actions';

const initialState = {
  error: '',
};

export default function signIn(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        error: '',
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
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
