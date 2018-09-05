import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  static propTypes = {};

  handleClickItem = () => {};

  handleClickButton = () => {};

  render() {
    const { content } = this.props;
    return (
      <div
        className="todo-item"
        onClick={this.handleClickItem}
      >
        <button
          className="todo-item__button"
          onClick={this.handleClickButton}
        >
          X
        </button>

        <p className="todo-item__content">{content}</p>
      </div>
    );
  }
}


export default TodoItem;

