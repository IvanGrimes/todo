import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signInRequest } from '../../actions/user';
import SignIn from './SignIn';
import { Redirect, Link } from 'react-router-dom';

class SignInContainer extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    handleSignIn: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleInput = (ev) => {
    const { type, value } = ev.target;

    this.setState({ [type]: value });
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
          <Fragment>
            <p>{error}</p>
            <SignIn
              email={email}
              password={password}
              handleInput={this.handleInput}
              handleClick={this.handleClick}
            />
            <Link to="/register">Sign Up</Link>
          </Fragment>
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
