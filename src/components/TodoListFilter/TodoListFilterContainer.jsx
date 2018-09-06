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
    const { currentFilter } = this.props;

    return (
      <TodoListFilter
        currentFilter={currentFilter}
        filters={[ALL, ACTIVE, COMPLETED]}
        handleClick={this.handleClick}
      />
    );
  }
}

const mapStateToProps = store => ({
  currentFilter: store.todo.filter,
});

const mapDispatchToState = dispatch => ({
  handleFilter: filter => dispatch(setTodoListFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToState)(TodoListFilterContainer);
