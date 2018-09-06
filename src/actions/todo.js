import {
  GET_TODO_LIST_REQUEST,
  ADD_TODO,
  TOGGLE_TODO_STATE,
  DELETE_TODO,
  SET_TODO_LIST_FILTER,
} from '../constants/actionTypes';

export const getTodoListRequest = uid => ({
  type: GET_TODO_LIST_REQUEST,
  payload: uid,
});

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodoState = (id, completed) => ({
  type: TOGGLE_TODO_STATE,
  payload: {
    id,
    completed,
  },
});

export const setTodoListFilter = filter => ({
  type: SET_TODO_LIST_FILTER,
  payload: filter,
});
