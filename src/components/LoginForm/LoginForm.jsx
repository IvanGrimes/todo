import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({
  email,
  password,
  buttonText,
  handleInput,
  handleClick,
  error,
  linkTo,
  linkText,
}) => {
  return (
    <div className="login-form">
      <p className="login-form__error">
        {error}
      </p>

      <input
        className={`login-form__input ${error.length ? 'login-form__input--is-not-valid' : ''}`}
        type="email"
        id="email"
        onChange={handleInput}
        value={email}
        placeholder="Username"
      />

      <input
        className={`login-form__input ${error.length ? 'login-form__input--is-not-valid' : ''}`}
        type="password"
        id="password"
        onChange={handleInput}
        value={password}
        placeholder="Password"
      />

      <div className="login-form__controls">
        <button
          className={`login-form__controls-button ${error.length ? 'login-form__button--is-not-valid' : ''}`}
          type="button"
          onClick={(ev) => {
            handleClick(ev);
          }}
        >
          {buttonText}
        </button>

        <Link className="login-form__controls-link" to={linkTo}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};

LoginForm.propTypes = {

};

export default LoginForm;
