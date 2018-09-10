import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddTodo.css';
import { IconContext } from 'react-icons';
import { FaPlusCircle } from 'react-icons/fa';

class AddTodo extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  state = {
    content: '',
  };

  handleChange = (ev) => {
    this.setState({ content: ev.target.value });
  };

  renderForm() {
    const { handleSubmit } = this.props;
    const { content } = this.state;

    return (
      <form className="add-todo">
        <input
          className="add-todo__input"
          type="text"
          onChange={this.handleChange}
          value={content}
          tabIndex="0"
          placeholder="Add your todo..."
        />

        <button
          className="add-todo__button"
          type="submit"
          onClick={(ev) => {
            handleSubmit(ev, content);
            this.setState({ content: '' });
          }}
          disabled={!content}
          tabIndex="0"
        >
          <IconContext.Provider value={{ className: 'add-todo__button-icon' }}>
            <FaPlusCircle />
          </IconContext.Provider>
        </button>
      </form>
    );
  }

  render() {
    return this.renderForm();
  }
}

export default AddTodo;
