import {
  SIGN_IN,
} from '../actions';

const initialState = {
  uid: null,
  username: null,
  auth: false,
};
// TODO: state will be cleaned on signOut
export default function user(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        uid: action.payload.uid,
        username: action.payload.email,
        auth: true,
      };
    default:
      return state;
  }
}
