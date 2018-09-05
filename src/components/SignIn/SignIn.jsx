import React from 'react';
import PropTypes from 'prop-types';

const SignIn = ({ username, password, handleInput, handleClick }) => (
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

SignIn.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SignIn;
