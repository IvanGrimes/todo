import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignIn extends Component {
  static propTypes = {

  };

  state = {
    username: '',
    password: '',
  };

  handleInput = (ev) => {
    const { id, value } = ev.target;

    this.setState({ [id]: value });
  };

  handleLogin = (ev) => {
    ev.preventDefault();
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <input
          id="username"
          type="text"
          onChange={this.handleInput}
          value={username}
          placeholder="Usernames"
        />

        <input
          id="password"
          type="password"
          onChange={this.handleInput}
          value={password}
          placeholder="Password"
        />

        <button
          type="button"
          onClick={this.handleLogin}
        >
          Login
        </button>
      </div>
    );
  }
}

export default SignIn;
