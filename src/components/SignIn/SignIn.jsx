import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SignIn extends Component {
  static propTypes = {

  };

  render() {
    const { username, password, handleInput, handleClick } = this.props;

    return (
      <div>
        <input
          id="username"
          type="text"
          onChange={handleInput}
          value={username}
          placeholder="Username"
        />

        <input
          id="password"
          type="password"
          onChange={handleInput}
          value={password}
          placeholder="Password"
        />

        <button
          type="button"
          onClick={(ev) => {
            handleClick(ev);
          }}
        >
          Login
        </button>
      </div>
    );
  }
}
