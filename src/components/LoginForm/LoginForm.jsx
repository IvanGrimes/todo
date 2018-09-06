import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({
  email,
  password,
  buttonText,
  handleChange,
  handleClick,
  error,
  linkTo,
  linkText,
  isFetching,
}) => {
  return (
    <div className={`login-form ${isFetching ? 'login-form--disabled' : ''}`}>
      <p className="login-form__error">
        {error}
      </p>

      <input
        className={`login-form__input ${error.length ? 'login-form__input--is-not-valid' : ''}`}
        type="email"
        id="email"
        onChange={handleChange}
        value={email}
        placeholder="Username"
        disabled={isFetching}
      />

      <input
        className={`login-form__input ${error.length ? 'login-form__input--is-not-valid' : ''}`}
        type="password"
        id="password"
        onChange={handleChange}
        value={password}
        placeholder="Password"
        disabled={isFetching}
      />

      <div className="login-form__controls">
        <button
          className={`login-form__controls-button ${error.length ? 'login-form__button--is-not-valid' : ''}`}
          type="button"
          disabled={isFetching}
          onClick={(ev) => {
            handleClick(ev);
          }}
        >
          {buttonText}
        </button>

        <Link
          className={`login-form__controls-link ${isFetching ? 'login-form__controls-link--disabled' : ''}`}
          to={linkTo}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

LoginForm.propTypes = {

};

export default LoginForm;
