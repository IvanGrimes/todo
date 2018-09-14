import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';
import { IconContext } from 'react-icons';
import {
  FaTimes,
  FaCheck,
} from 'react-icons/fa';

const TodoItem = ({
  content,
  handleClickContent,
  handleClickButton,
  itemId,
  completed,
}) => (
  <div
    className="todo-item"
  >
    <button
      type="button"
      onClick={() => handleClickContent(itemId)}
      tabIndex="0"
      className={`todo-item__complete-button ${completed ? 'todo-item__complete-button--completed' : ''}`}
    >
      <IconContext.Provider value={{ className: completed ? 'todo-item__complete-button-icon todo-item__complete-button-icon--completed' : 'todo-item__complete-button-icon' }}>
        <FaCheck />
      </IconContext.Provider>
    </button>

    <div className={`todo-item__content ${completed ? 'todo-item__content--completed' : ''}`}>
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
