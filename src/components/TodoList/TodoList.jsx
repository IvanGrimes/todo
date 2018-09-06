import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItemContainer from '../TodoItem/TodoItemContainer';

class TodoList extends Component {
  static propTypes = {};

  renderItems() {
    const { todoList } = this.props;

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
    ))
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default TodoList;
