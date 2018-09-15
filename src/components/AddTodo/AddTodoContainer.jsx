import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import { addTodo } from '../../actions/todo';
import AddTodo from './AddTodo';
import { database } from '../../firebase';

const mapDispatchToState = dispatch => ({
  handleAdd: todo => dispatch(addTodo(todo)),
});

class AddTodoContainer extends Component {
  static propTypes = {
    handleAdd: PropTypes.func.isRequired,
  };

  handleSubmit = (ev, content) => {
    ev.preventDefault();
    const { handleAdd } = this.props;
    const id = uuid();
    const date = new Date().getTime();

    handleAdd({
      key: id,
      content,
      completed: false,
      created_at: date,
    });

    database.ref(`users/${localStorage.getItem('uid')}/todolist/${id}`).set({
      content,
      completed: false,
      created_at: date,
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

export default connect(null, mapDispatchToState)(AddTodoContainer);
