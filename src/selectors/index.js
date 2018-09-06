import { createSelector } from 'reselect';
import { ALL, ACTIVE, COMPLETED } from '../constants/filterTypes';

const getFilterType = store => store.todo.filter;
const getTodoList = store => store.todo.list;

export const getFilteredTodoList = createSelector(
  [getFilterType, getTodoList],
  (filter, list) => {
    switch (filter) {
      case ALL:
        return list;
      case ACTIVE:
        return list.filter(todo => !todo.completed);
      case COMPLETED:
        return list.filter(todo => todo.completed);
      default:
        return list;
    }
  },
);

console.log()
