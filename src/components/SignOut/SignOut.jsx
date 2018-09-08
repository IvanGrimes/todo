import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const SignOut = ({ handleClick }) => (
  <Button
    className="todo-list__controls-sign-out"
    type="button"
    onClick={handleClick}
  >
    Sign out
  </Button>
);

SignOut.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default SignOut;
