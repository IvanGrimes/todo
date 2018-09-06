import React from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import './TodoListFilter.css';
import Button from '../Button/Button';

const TodoListFilter = ({ filters, handleClick, currentFilter }) => (
  <div className="todo-list-filter">
    {
      filters.map(filter => (
        <Button
          className={`todo-list-filter__button ${currentFilter === filter ? 'todo-list-filter__button--active' : ''}`}
          type="button"
          key={uuid()}
          onClick={() => handleClick(filter)}
        >
          {filter}
        </Button>
      ))
    }
  </div>
);

TodoListFilter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

export default TodoListFilter;
