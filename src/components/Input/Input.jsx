import React from 'react';
import './Input.css';

const Input = ({ valid, ...rest }) => (
  <input
    className={`input ${valid ? 'input--is-not-valid' : ''}`}
    {...rest}
  />
);

export default Input;
