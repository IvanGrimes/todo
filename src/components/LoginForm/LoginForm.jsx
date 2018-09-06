import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import { IconContext } from 'react-icons';
import { FaUser, FaKey } from 'react-icons/fa';

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

      <div className="login-form__input-wrapper">
        <input
          className={`login-form__input ${error.length ? 'login-form__input--is-not-valid' : ''}`}
          type="email"
          id="email"
          onChange={handleChange}
          value={email}
          placeholder="Username"
          disabled={isFetching}
        />
        <IconContext.Provider value={{ className: 'login-form__input-icon' }}>
          <FaUser />
        </IconContext.Provider>
      </div>

      <div className="login-form__input-wrapper">
        <input
          className={`login-form__input ${error.length ? 'login-form__input--is-not-valid' : ''}`}
          type="password"
          id="password"
          onChange={handleChange}
          value={password}
          placeholder="Password"
          disabled={isFetching}
        />
        <IconContext.Provider value={{ className: 'login-form__input-icon' }}>
          <FaKey />
        </IconContext.Provider>
      </div>


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
