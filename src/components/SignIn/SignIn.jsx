import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

const SignIn = ({
  email,
  password,
  handleInput,
  handleClick,
}) => (
  <div>
    <Input
      type="email"
      id="email"
      onChange={handleInput}
      value={email}
      placeholder="Username"
    />

    <Input
      type="password"
      id="password"
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
