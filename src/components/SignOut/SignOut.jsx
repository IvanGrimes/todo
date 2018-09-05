import React from 'react';
import PropTypes from 'prop-types';

const SignOut = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
    >
      Sign out
    </button>
  );
};

SignOut.propTypes = {

};

export default SignOut;
