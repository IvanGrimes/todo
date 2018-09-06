import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteTodo, toggleTodoState } from '../../actions/todo';

class TodoItemContainer extends Component {
  static propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleComplete: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
  };

  handleClickButton = (id) => {
    const { handleDelete } = this.props;
    handleDelete(id);
  };

  handleClickContent = (id) => {
    const { handleComplete, completed } = this.props;
    handleComplete(id, !completed);
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
  handleComplete: (id, completed) => dispatch(toggleTodoState(id, completed)),
});

export default connect(null, mapDispatchToState)(TodoItemContainer);
