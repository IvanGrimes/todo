import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

const LoginForm = ({
  email,
  password,
  buttonText,
  handleInput,
  handleClick,
  error,
}) => {
  return (
    <div className="form">
      <p className="form__error">
        {error}
      </p>

      <Input
        type="email"
        id="email"
        onChange={handleInput}
        value={email}
        placeholder="Username"
      />

      <Input
        type="password"
        id="password"
        onChange={handleInput}
        value={password}
        placeholder="Password"
      />

      <button
        type="button"
        onClick={(ev) => {
          handleClick(ev);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

LoginForm.propTypes = {

};

export default LoginForm;
