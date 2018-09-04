import {
  SET_USER,
} from '../actions';

const initialState = {
  uid: null,
  email: null,
};
// TODO: state will be cleaned on signOut
export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        uid: action.payload.uid,
        email: action.payload.email,
      };
    default:
      return state;
  }
}
