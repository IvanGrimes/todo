import React from 'react';
import './Button.css';

const Button = ({ className = '', children, ...props }) => (
  <button
    type="button"
    tabIndex="0"
    {...props}
    className={`button ${className}`}
  >
    {children}
  </button>
);

export default Button;
