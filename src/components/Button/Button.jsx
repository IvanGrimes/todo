import React from 'react';
import './Button.css';

const Button = ({ className = '', children, ...props }) => (
  <button
    type="button"
    {...props}
    className={`button ${className}`}
  >
    {children}
  </button>
);

export default Button;
