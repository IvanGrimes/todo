import React from 'react';
import PropTypes from 'prop-types';

const SignOut = ({ handleClick }) => (
  <button
    type="button"
    onClick={handleClick}
  >
    Sign out
  </button>
);

SignOut.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default SignOut;
