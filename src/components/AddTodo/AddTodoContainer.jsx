import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import { addTodo } from '../../actions/todo';
import AddTodo from './AddTodo';
import { database } from '../../firebase';

class AddTodoContainer extends Component {
  static propTypes = {
    handleAdd: PropTypes.func.isRequired,
  };

  handleSubmit = (ev, content) => {
    ev.preventDefault();
    const { handleAdd } = this.props;
    const id = uuid();

    handleAdd({
      key: id,
      content,
      completed: false,
    });

    database.ref(`users/${localStorage.getItem('uid')}/todolist/${id}`).set({
      content,
      completed: false,
    });
  };

  render() {
    return (
      <div>
        <AddTodo
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToState = dispatch => ({
  handleAdd: todo => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToState)(AddTodoContainer);
