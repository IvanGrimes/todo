import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpRequest, clearError } from '../../actions/user';
import SignUp from './SignUp';

class SignUpContainer extends Component {
  static propTypes = {
    handleSignUp: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  };

  state = {
    email: '',
    password: '',
    prevRoute: null,
  };

  handleChange = (ev) => {
    const { value, id } = ev.target;

    this.setState({ [id]: value });
  };

  handleClick = () => {
    const { email, password } = this.state;
    const { handleSignUp } = this.props;

    handleSignUp(email, password);
  };

  componentDidMount() {
    const { clearErrorMessage } = this.props;
    clearErrorMessage();
  }

  render() {
    const { isAuth, error, isFetching } = this.props;
    const { email, password } = this.state;

    if (isAuth) {
      return <Redirect to="/" />;
    }

    return (
      <SignUp
        error={error}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        email={email}
        password={password}
        buttonText="Sign Up"
        linkTo="/login"
        linkText="Sign In"
        isFetching={isFetching}
      />
    );
  }
}

const mapStateToProps = store => ({
  isAuth: store.user.auth,
  isFetching: store.user.isFetching,
  error: store.user.error,
});

const mapDispatchToState = dispatch => ({
  handleSignUp: (email, password) => (
    dispatch(signUpRequest(email, password))
  ),
  clearErrorMessage: () => (
    dispatch(clearError())
  ),
});

export default connect(mapStateToProps, mapDispatchToState)(SignUpContainer);
