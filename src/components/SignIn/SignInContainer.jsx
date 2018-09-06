import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signInRequest } from '../../actions/user';
import SignIn from './SignIn';

class SignInContainer extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    handleSignIn: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleInput = (ev) => {
    const { id, value } = ev.target;

    this.setState({ [id]: value });
  };

  handleClick = (ev) => {
    ev.preventDefault();
    const { email, password } = this.state;
    const { handleSignIn } = this.props;

    handleSignIn(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { isAuth, isFetching, error } = this.props;

    if (isAuth) {
      return <Redirect to="/" />;
    }

    return (
      isFetching
        ? <p>Fetching...</p>
        : (
          <SignIn
            email={email}
            password={password}
            handleInput={this.handleInput}
            handleClick={this.handleClick}
            error={error}
            buttonText="Sign In"
            linkTo="/register"
            linkText="Sign Up"
          />
        )
    );
  }
}

const mapStateToProps = store => ({
  isAuth: store.user.auth,
  isFetching: store.user.isFetching,
  error: store.user.error,
});

const mapDispatchToProps = dispatch => ({
  handleSignIn: (username, password) => (
    dispatch(signInRequest(username, password))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
