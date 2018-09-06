import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const SignOut = ({ handleClick }) => (
  <Button
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
