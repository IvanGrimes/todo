import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpRequest } from '../../actions/user';
import SignUp from './SignUp';

class SignUpContainer extends Component {
  propTypes = {
    handleSignUp: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  };

  state = {
    email: '',
    password: '',
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

  render() {
    const { isAuth, error } = this.props;
    const { email, password } = this.state;

    if (isAuth) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <SignUp
          error={error}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          email={email}
          password={password}
        />
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

export default connect(mapStateToProps, mapDispatchToState)(SignUpContainer);
