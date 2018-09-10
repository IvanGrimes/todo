import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import { IconContext } from 'react-icons';
import {
  FaUser,
  FaKey,
} from 'react-icons/fa';
import { TransitionGroup } from 'react-transition-group';
import Button from '../Button/Button';
import Fade from '../Fade/Fade';

class LoginForm extends Component {
  static propTypes = {
    buttonText: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    linkText: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleChange = (ev) => {
    const { id, value } = ev.target;

    this.setState({ [id]: value });
  };

  renderForm() {
    const {
      isFetching,
      handleClick,
      error,
      linkTo,
      linkText,
      buttonText,
    } = this.props;
    const { email, password } = this.state;
    console.log(isFetching)
    return (
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            className={`login-form__controls-button ${error.length
              ? 'login-form__button--is-not-valid'
              : ''}`}
            type="submit"
            disabled={isFetching}
            onClick={(ev) => {
              handleClick(ev, email, password);
            }}
          >
            {buttonText}
          </Button>
          <Link
            className={`login-form__controls-link ${isFetching
              ? 'login-form__controls-link--disabled'
              : ''}`}
            to={linkTo}
          >
            {linkText}
          </Link>
        </div>
      </form>
    );
  }

  render() {
    return this.renderForm();
  }
}

export default LoginForm;
