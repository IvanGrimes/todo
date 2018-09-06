import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteTodo } from '../../actions/todo';
import {database} from "../../firebase";

class TodoItemContainer extends Component {
  static propTypes = {};

  handleClickButton = (id) => {
    const { handleDelete } = this.props;
    handleDelete(id);
    database.ref(`users/${localStorage.getItem('uid')}/todolist/${id}`).remove();
  };

  handleClickItem = (id) => {};

  render() {
    const { content, itemId } = this.props;
    return (
      <TodoItem
        itemId={itemId}
        content={content}
        handleClickButton={this.handleClickButton}
        handleClickItem={this.handleClickItem}
      />
    );
  }
}

const mapDispatchToState = dispatch => ({
  handleDelete: id => dispatch(deleteTodo(id)),
});

export default connect(null, mapDispatchToState)(TodoItemContainer);
