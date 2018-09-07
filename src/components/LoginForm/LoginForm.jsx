import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import { IconContext } from 'react-icons';
import { FaUser, FaKey } from 'react-icons/fa';
import Button from '../Button/Button';
import Fade from '../Fade/Fade';
import { TransitionGroup } from 'react-transition-group';

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
}) => (
  <form
    className={`login-form ${isFetching ? 'login-form--disabled' : ''}`}
    onSubmit={(ev) => {
      ev.preventDefault();
      handleClick(ev);
    }}
  >
    <TransitionGroup>
      {
        error.length ? (
          <Fade>
            <p className="login-form__error">
              {error}
            </p>
          </Fade>
        ) : null
      }
    </TransitionGroup>

    <div className="login-form__input-wrapper">
      <input
        className={`login-form__input ${error.length ? 'login-form__input--is-not-valid' : ''}`}
        type="email"
        id="email"
        onChange={handleChange}
        value={email}
        placeholder="Email"
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
      <Button
        className={`login-form__controls-button ${error.length ? 'login-form__button--is-not-valid' : ''}`}
        type="submit"
        disabled={isFetching}
        onClick={(ev) => {
          handleClick(ev);
        }}
      >
        {buttonText}
      </Button>

      <Link
        className={`login-form__controls-link ${isFetching ? 'login-form__controls-link--disabled' : ''}`}
        to={linkTo}
      >
        {linkText}
      </Link>
    </div>
  </form>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default LoginForm;
