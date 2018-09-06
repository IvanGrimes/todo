import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpRequest } from '../../actions/user';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (ev) => {
    const { value, type } = ev.target;

    this.setState({ [type]: value });
  };

  handleClick = () => {
    const { email, password } = this.state;
    const { handleSignUp } = this.props;

    handleSignUp(email, password);
  };

  render() {
    const { isAuth, error } = this.props;
    const { email, password } = this.state;

    if (isAuth) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <p>{error}</p>
        <input
          type="email"
          onChange={this.handleChange}
          value={email}
          placeholder="Email"
        />

        <input
          type="password"
          onChange={this.handleChange}
          value={password}
          placeholder="Password"
        />

        <button
          type="button"
          onClick={this.handleClick}
        >
          Sign Up
        </button>

        <Link to="/login">Sign In</Link>
      </div>
    );
  }
}

SignUp.propTypes = {};

const mapStateToProps = store => ({
  isAuth: store.user.auth,
  error: store.user.error,
});

const mapDispatchToState = dispatch => ({
  handleSignUp: (email, password) => (
    dispatch(signUpRequest(email, password))
  ),
});

export default connect(mapStateToProps, mapDispatchToState)(SignUp);
