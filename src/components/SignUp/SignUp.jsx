import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpRequest } from '../../actions/user';

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

export default SignUp;
