import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoListFilter from './TodoListFilter';
import { setTodoListFilter } from '../../actions/todo';
import {
  ALL,
  COMPLETED,
  ACTIVE,
} from '../../constants/filterTypes';

class TodoListFilterContainer extends Component {
  static propTypes = {
    handleFilter: PropTypes.func.isRequired,
  };

  handleClick = (filter) => {
    const { handleFilter } = this.props;
    handleFilter(filter);
  };

  render() {
    return (
      <TodoListFilter
        filters={[ALL, ACTIVE, COMPLETED]}
        handleClick={this.handleClick}
      />
    );
  }
}

const mapDispatchToState = dispatch => ({
  handleFilter: filter => dispatch(setTodoListFilter(filter)),
});

export default connect(null, mapDispatchToState)(TodoListFilterContainer);
