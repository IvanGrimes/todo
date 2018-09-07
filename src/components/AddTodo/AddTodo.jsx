import React from 'react';
import PropTypes from 'prop-types';
import './AddTodo.css';
import { IconContext } from 'react-icons';
import { FaPlusCircle } from 'react-icons/fa';

const AddTodo = ({ content, handleChange, handleClick }) => (
  <div className="add-todo">
    <input
      className="add-todo__input"
      type="text"
      onChange={handleChange}
      value={content}
      tabIndex="0"
    />

    <button
      className="add-todo__button"
      type="button"
      onClick={handleClick}
      disabled={!content}
      tabIndex="0"
    >
      <IconContext.Provider value={{ className: 'add-todo__button-icon' }}>
        <FaPlusCircle />
      </IconContext.Provider>
    </button>
  </div>
);

AddTodo.propTypes = {
  content: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default AddTodo;
