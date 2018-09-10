import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getTodoListRequest } from '../../actions/todo';
import TodoList from './TodoList';
import {
  getFilteredTodoList,
  getFilterState,
  getAuthState,
  getFetchingState,
} from '../../selectors';

class TodoListContainer extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    getTodoList: PropTypes.func.isRequired,
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetching: PropTypes.bool.isRequired,
    currentFilter: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { getTodoList } = this.props;
    getTodoList(localStorage.getItem('uid'));
  }

  render() {
    const {
      isAuth,
      todoList,
      isFetching,
      currentFilter,
    } = this.props;

    if (!isAuth) {
      return <Redirect to="/login" />;
    }

    return (
      <TodoList
        todoList={todoList}
        isFetching={isFetching}
        currentFilter={currentFilter}
      />
    );
  }
}

const mapStateToProps = store => ({
  isAuth: getAuthState(store),
  isFetching: getFetchingState(store),
  todoList: getFilteredTodoList(store),
  currentFilter: getFilterState(store),
});

const mapDispatchToState = dispatch => ({
  getTodoList: uid => (
    dispatch(getTodoListRequest(uid))
  ),
});

export default connect(mapStateToProps, mapDispatchToState)(TodoListContainer);
