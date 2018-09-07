import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import TodoItemContainer from '../TodoItem/TodoItemContainer';
import Preloader from '../Preloader/Preloader';
import SignOutContainer from '../SignOut/SignOutContainer';
import TodoListFilterContainer from '../TodoListFilter/TodoListFilterContainer';
import AddTodoContainer from '../AddTodo/AddTodoContainer';
import { ALL, ACTIVE, COMPLETED } from '../../constants/filterTypes';
import './TodoList.css';
import Fade from '../Fade/Fade';

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
      <div className="todo-list__items">
        <TransitionGroup>
          {todoList.map(todo => (
            <Fade key={todo.key}>
              <TodoItemContainer
                itemId={todo.key}
                content={todo.content}
                completed={todo.completed}
              />
            </Fade>
          ))}
        </TransitionGroup>

        { !todoList.length
        && currentFilter === ALL
        && <p className="todo-list__empty-text">Add your first todo ;)</p> }
        { !todoList.length
        && currentFilter === ACTIVE
        && <p className="todo-list__empty-text">You are complete all your todos ^^</p> }
        { !todoList.length
        && currentFilter === COMPLETED
        && <p className="todo-list__empty-text">You are not complete any of your todo :)</p> }
      </div>
      <AddTodoContainer />
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

export default TodoList;
