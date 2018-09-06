import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteTodo, completeTodo } from '../../actions/todo';
import {database} from "../../firebase";

class TodoItemContainer extends Component {
  static propTypes = {};

  handleClickButton = (id) => {
    const { handleDelete } = this.props;
    handleDelete(id);
    database.ref(`users/${localStorage.getItem('uid')}/todolist/${id}`).remove();
  };

  handleClickContent = (id) => {
    const { handleComplete, completed } = this.props;

    handleComplete(id);
    database.ref(`users/${localStorage.getItem('uid')}/todolist/${id}`).update({
      completed: !completed,
    });
  };

  render() {
    const { content, itemId, completed } = this.props;
    return (
      <TodoItem
        itemId={itemId}
        content={content}
        handleClickButton={this.handleClickButton}
        handleClickContent={this.handleClickContent}
        completed={completed}
      />
    );
  }
}

const mapDispatchToState = dispatch => ({
  handleDelete: id => dispatch(deleteTodo(id)),
  handleComplete: id => dispatch(completeTodo(id)),
});

export default connect(null, mapDispatchToState)(TodoItemContainer);
