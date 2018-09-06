import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItemContainer from '../TodoItem/TodoItemContainer';

class Todo extends Component {
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

export default Todo;
