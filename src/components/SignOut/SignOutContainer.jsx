import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOut } from '../../actions/user';
import SignOut from './SignOut';

class SignOutContainer extends Component {
  static SignOutContainer = {

  };

  handleClick = (ev) => {
    ev.preventDefault();
    const { handleSignOut } = this.props;

    handleSignOut();
  };

  render() {
    return (
      <SignOut
        handleClick={this.handleClick}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSignOut: () => (
    dispatch(signOut())
  ),
});

export default connect(null, mapDispatchToProps)(SignOutContainer);
