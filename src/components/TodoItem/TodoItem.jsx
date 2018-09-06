import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  static propTypes = {};



  render() {
    const {
      content,
      handleClickContent,
      handleClickButton,
      itemId,
      completed
    } = this.props;

    return (
      <div
        className={`todo__item ${completed ? 'todo__item--completed' : ''}`}
      >
        <button
          type="button"
          className="todo-item__button"
          onClick={() => handleClickButton(itemId)}
        >
          X
        </button>

        <p
          className="todo-item__content"
          onClick={() => handleClickContent(itemId)}
        >
          {content}
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  handleClickContent: PropTypes.func.isRequired,
  handleClickButton: PropTypes.func.isRequired,
  itemId: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;
