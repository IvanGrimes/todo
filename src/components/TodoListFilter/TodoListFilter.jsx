import React, {Component} from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';

class TodoListFilter extends Component {
  static propTypes = {
    filters: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  render() {
    const { filters, handleClick } = this.props;

    return filters.map(filter => (
      <button
        type="button"
        key={uuid()}
        onClick={() => handleClick(filter)}
      >
        {filter}
      </button>
    ));
  }
}

TodoListFilter.propTypes = {};

export default TodoListFilter;
