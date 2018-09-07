import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';
import { IconContext } from 'react-icons';
import { FaTimes } from 'react-icons/fa';

const TodoItem = ({
  content,
  handleClickContent,
  handleClickButton,
  itemId,
  completed,
}) => (
  <div
    className={`todo-item ${completed ? 'todo-item--completed' : ''}`}
  >
    <div
      role="button"
      aria-roledescription="todo-item"
      className="todo-item__content"
      onClick={() => handleClickContent(itemId)}
      onKeyPress={(ev) => {
        if (ev.key === ' ') { // ev.key === 'Space'
          handleClickContent(itemId);
        }
      }}
      tabIndex="0"
    >
      {content}
    </div>

    <button
      type="button"
      className="todo-item__button"
      onClick={() => handleClickButton(itemId)}
      tabIndex="0"
    >
      <IconContext.Provider value={{ className: 'todo-item__button-icon' }}>
        <FaTimes />
      </IconContext.Provider>
    </button>
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
