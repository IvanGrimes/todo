import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import SignOutContainer from '../SignOut/SignOutContainer';
import { getTodoListRequest, deleteTodo } from '../../actions/todo';
import TodoList from './TodoList';
import AddTodoContainer from '../AddTodo/AddTodoContainer';
import TodoListFilterContainer from '../TodoListFilter/TodoListFilterContainer';
import { getFilteredTodoList } from '../../selectors';

class TodoListContainer extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { getTodoList } = this.props;
    getTodoList(localStorage.getItem('uid'));
  }

  render() {
    const { isAuth, todoList } = this.props;

    if (!isAuth) {
      return <Redirect to="/login" />;
    }
    return (
      <Fragment>
        <SignOutContainer />
        <TodoListFilterContainer />
        <TodoList
          todoList={todoList}
        />
        <AddTodoContainer />
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  isAuth: store.user.auth,
  todoList: getFilteredTodoList(store),
});

const mapDispatchToState = dispatch => ({
  getTodoList: uid => (
    dispatch(getTodoListRequest(uid))
  ),
});

export default connect(mapStateToProps, mapDispatchToState)(TodoListContainer);
