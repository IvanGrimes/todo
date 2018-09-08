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

  state = {
    content: '',
  };

  handleChange = (ev) => {
    this.setState({ content: ev.target.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { content } = this.state;
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

    this.setState({ content: '' });
  };

  render() {
    const { content } = this.state;

    return (
      <div>
        <AddTodo
          content={content}
          handleChange={this.handleChange}
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
