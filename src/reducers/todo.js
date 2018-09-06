import {
  GET_TODO_LIST_REQUEST,
  GET_TODO_LIST_SUCCESS,
  GET_TODO_LIST_FAIL,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from '../constants/actionTypes';

const initialState = {
  list: [],
  error: null,
};

export default function todo(state = initialState, action) {
  switch (action.type) {
    case GET_TODO_LIST_REQUEST:
      return {
        ...state,
        error: null,
      };
    case GET_TODO_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case GET_TODO_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter(todoItem => todoItem.key !== action.payload),
      };
    default:
      return state;
  }
}
