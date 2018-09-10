import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm/LoginForm';

const SignIn = props => (
  <LoginForm
    {...props}
  />
);

SignIn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default SignIn;
