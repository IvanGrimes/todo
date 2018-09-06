import React  from 'react';
import PropTypes from 'prop-types';
import TodoItemContainer from '../TodoItem/TodoItemContainer';

const TodoList = ({ todoList }) => {
  if (!todoList.length) {
    return <p>You don't have any todo</p>;
  }

  return todoList.map(todo => (
    <TodoItemContainer
      key={todo.key}
      itemId={todo.key}
      content={todo.content}
      completed={todo.completed}
    />
  ));
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
