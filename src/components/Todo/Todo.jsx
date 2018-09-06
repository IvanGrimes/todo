import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  static propTypes = {};

  renderItems() {
    const { todoList } = this.props;

    if (!todoList.length) {
      return <p>You don't have any todo</p>;
    }

    return (
      todoList.map(todo => (
        <div
          key={todo.key}
        >
          {todo.content}
        </div>
      ))
    );
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
