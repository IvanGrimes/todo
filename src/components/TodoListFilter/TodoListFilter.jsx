import React from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';

const TodoListFilter = ({ filters, handleClick }) => (
  filters.map(filter => (
    <button
      type="button"
      key={uuid()}
      onClick={() => handleClick(filter)}
    >
      {filter}
    </button>
  ))
);

TodoListFilter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TodoListFilter;
