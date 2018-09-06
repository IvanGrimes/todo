import React from 'react';
import PropTypes from 'prop-types';

const SignIn = ({ email, password, handleInput, handleClick }) => (
  <div>
    <input
      type="email"
      onChange={handleInput}
      value={email}
      placeholder="Username"
    />

    <input
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
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SignIn;
