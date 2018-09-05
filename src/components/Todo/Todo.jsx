import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  static propTypes = {};

  renderItems() {
    const { todoList } = this.props;

    return Object.entries(todoList).map(([key, prop]) => (
      <div
        key={key}
      >
        {prop}
      </div>
    ));
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
