import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  static propTypes = {};



  render() {
    const {
      content,
      handleClickItem,
      handleClickButton,
      itemId,
    } = this.props;

    return (
      <div
        className="todo-item"
        onClick={() => handleClickItem(itemId)}
      >
        <button
          className="todo-item__button"
          onClick={() => handleClickButton(itemId)}
        >
          X
        </button>

        <p className="todo-item__content">
          {content}
        </p>
      </div>
    );
  }
}


export default TodoItem;

