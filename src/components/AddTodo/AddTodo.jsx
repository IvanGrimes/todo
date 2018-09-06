import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ content, handleChange, handleClick }) => (
  <div>
    <input
      type="text"
      onChange={handleChange}
      value={content}
    />

    <button
      type="button"
      onClick={handleClick}
      disabled={!content}
    >
      Add
    </button>
  </div>
);

AddTodo.propTypes = {
  content: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default AddTodo;
