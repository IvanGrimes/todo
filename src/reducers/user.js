import {
  AUTH_USER,
} from '../actions';

const initialState = {
  uid: localStorage.getItem('uid'),
  auth: !!localStorage.getItem('uid'),
};
// TODO: state will be cleaned on signOut
export default function user(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        uid: action.payload.uid,
        auth: true,
      };
    default:
      return state;
  }
}
