import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({
  content,
  handleClickContent,
  handleClickButton,
  itemId,
  completed,
}) => (
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

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  handleClickContent: PropTypes.func.isRequired,
  handleClickButton: PropTypes.func.isRequired,
  itemId: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;
