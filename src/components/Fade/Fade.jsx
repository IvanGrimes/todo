import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Fade.css';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    classNames="fade"
    timeout={500}
    appear
  >
    {children}
  </CSSTransition>
);

export default Fade;
