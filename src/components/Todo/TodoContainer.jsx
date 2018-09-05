import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import SignOutContainer from '../SignOut/SignOutContainer';
import { getTodoListRequest } from '../../actions/todo';
import Todo from './Todo';

class TodoContainer extends Component {
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
        <Todo
          todoList={todoList}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  isAuth: store.user.auth,
  todoList: store.todo.list,
});

const mapDispatchToState = dispatch => ({
  getTodoList: uid => (
    dispatch(getTodoListRequest(uid))
  ),
});

export default connect(mapStateToProps, mapDispatchToState)(TodoContainer);
