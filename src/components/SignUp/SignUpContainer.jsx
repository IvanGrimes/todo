import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpRequest, clearError } from '../../actions/user';
import SignUp from './SignUp';
import { MAIN, LOGIN } from '../../constants/routes';
import { getAuthState, getFetchingState, getUserError } from '../../selectors';

class SignUpContainer extends Component {
  static propTypes = {
    handleSignUp: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
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
    const { value, id } = ev.target;

    this.setState({ [id]: value });
  };

  handleClick = () => {
    const { email, password } = this.state;
    const { handleSignUp } = this.props;

    handleSignUp(email, password);
  };

  render() {
    const { isAuth, error, isFetching } = this.props;
    const { email, password } = this.state;

    if (isAuth) {
      return <Redirect to={MAIN} />;
    }

    return (
      <SignUp
        error={error}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        email={email}
        password={password}
        buttonText="Sign Up"
        linkTo={LOGIN}
        linkText="Sign In"
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

const mapDispatchToState = dispatch => ({
  handleSignUp: (email, password) => (
    dispatch(signUpRequest(email, password))
  ),
  clearErrorMessage: () => (
    dispatch(clearError())
  ),
});

export default connect(mapStateToProps, mapDispatchToState)(SignUpContainer);
