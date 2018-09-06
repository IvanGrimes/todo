import React, {Component} from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';

class TodoListFilter extends Component {
  render() {
    const { filters, handleClick } = this.props;

    return filters.map(filter => (
      <button
        key={uuid()}
        filter={filter}
        onClick={() => handleClick(filter)}
      >
        {filter}
      </button>
    ));
  }
}

TodoListFilter.propTypes = {};

export default TodoListFilter;
