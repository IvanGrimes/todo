import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SignUp = ({
  error,
  email,
  password,
  handleChange,
  handleClick,
}) => (
  <Fragment>
    <p>{error}</p>
    <input
      type="email"
      id="email"
      onChange={handleChange}
      value={email}
      placeholder="Email"
    />

    <input
      type="password"
      id="password"
      onChange={handleChange}
      value={password}
      placeholder="Password"
    />

    <button
      type="button"
      onClick={handleClick}
    >
      Sign Up
    </button>

    <Link to="/login">Sign In</Link>
  </Fragment>
);

SignUp.propTypes = {
  error: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SignUp;
