import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import TodoItemContainer from '../TodoItem/TodoItemContainer';
import Preloader from '../Preloader/Preloader';
import SignOutContainer from '../SignOut/SignOutContainer';
import TodoListFilterContainer from '../TodoListFilter/TodoListFilterContainer';
import AddTodoContainer from '../AddTodo/AddTodoContainer';
import { ALL, ACTIVE, COMPLETED } from '../../constants/filterTypes';
import './TodoList.css';

const TodoList = ({ todoList, isFetching, currentFilter }) => {
  if (isFetching) {
    return <Preloader />;
  }

  return (
    <div className="todo-list">
      <div className="todo-list__controls">
        <TodoListFilterContainer />
        <SignOutContainer />
      </div>
      {todoList.map(todo => (
        <TodoItemContainer
          key={todo.key}
          itemId={todo.key}
          content={todo.content}
          completed={todo.completed}
        />
      ))}
      { !todoList.length && currentFilter === ALL && <p>Add your first todo ;)</p> }
      { !todoList.length && currentFilter === ACTIVE && <p>You are complete all your todos ^^</p> }
      { !todoList.length && currentFilter === COMPLETED && <p>You are not complete any of your todo :)</p> }
      <AddTodoContainer />
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default TodoList;
