import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearError, signInRequest } from '../../actions/user';
import SignIn from './SignIn';
import { MAIN, REGISTER } from '../../constants/routes';
import { getFetchingState, getUserError, getAuthState } from '../../selectors';

class SignInContainer extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    handleSignIn: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    clearErrorMessage: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    const { clearErrorMessage } = this.props;
    clearErrorMessage();
  }

  handleChange = (ev) => {
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
      return <Redirect to={MAIN} />;
    }

    return (
      <SignIn
        email={email}
        password={password}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        error={error}
        buttonText="Sign In"
        linkTo={REGISTER}
        linkText="Sign Up"
        isFetching={isFetching}
      />
    );
  }
}

const mapStateToProps = store => ({
  isAuth: getAuthState(store),
  isFetching: getFetchingState(store),
  error: getUserError(store),
});

const mapDispatchToProps = dispatch => ({
  handleSignIn: (username, password) => (
    dispatch(signInRequest(username, password))
  ),
  clearErrorMessage: () => (
    dispatch(clearError())
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
