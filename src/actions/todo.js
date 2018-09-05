import {
  GET_TODO_LIST_REQUEST,
  GET_TODO_LIST_SUCCESS,
  GET_TODO_LIST_FAIL,
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
} from "../constants/actionTypes";

export const getTodoListRequest = uid => ({
  type: GET_TODO_LIST_REQUEST,
  payload: uid,
});
