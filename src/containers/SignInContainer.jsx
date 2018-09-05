import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn } from '../actions/index';
import SignIn from '../components/SignIn';
import { Redirect } from 'react-router-dom';

class SignInContainer extends Component {
  static propTypes = {

  };

  state = {
    username: '',
    password: '',
  };

  handleInput = (ev) => {
    const { id, value } = ev.target;

    this.setState({ [id]: value });
  };

  handleClick = (ev) => {
    ev.preventDefault();
    const { username, password } = this.state;
    const { auth } = this.props;

    auth(username, password);
  };

  render() {
    const { username, password } = this.state;
    const { isAuth } = this.props;

    if (isAuth) {
      return <Redirect to="/" />;
    }

    return (
      <SignIn
        username={username}
        password={password}
        handleInput={this.handleInput}
        handleClick={this.handleClick}
      />
    )
  }
}

const mapStateToProps = store => ({
  isAuth: store.user.auth,
});

const mapDispatchToProps = (dispatch) => ({
  auth: (username, password) => {
    dispatch(signIn(username, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
