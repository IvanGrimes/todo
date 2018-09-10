import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm/LoginForm';

const SignUp = props => (
  <LoginForm
    {...props}
  />
);

SignUp.propTypes = {
  error: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SignUp;
