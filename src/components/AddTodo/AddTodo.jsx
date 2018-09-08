import React from 'react';
import PropTypes from 'prop-types';
import './AddTodo.css';
import { IconContext } from 'react-icons';
import { FaPlusCircle } from 'react-icons/fa';

const AddTodo = ({ content, handleChange, handleSubmit }) => (
  <form className="add-todo">
    <input
      className="add-todo__input"
      type="text"
      onChange={handleChange}
      value={content}
      tabIndex="0"
      placeholder="Add your todo..."
    />

    <button
      className="add-todo__button"
      type="submit"
      onClick={handleSubmit}
      disabled={!content}
      tabIndex="0"
    >
      <IconContext.Provider value={{ className: 'add-todo__button-icon' }}>
        <FaPlusCircle />
      </IconContext.Provider>
    </button>
  </form>
);

AddTodo.propTypes = {
  content: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddTodo;
