import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import SignOut from '../components/SignOut';

class TodoList extends Component {
  static propTypes = {

  };

  render() {
    const { isAuth } = this.props;

    if (!isAuth) {
      return <Redirect to="/login" />;
    }
    return (
      <Fragment>
        <p>You're logged in</p>
        <SignOut />
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  isAuth: store.user.auth,
});

export default connect(mapStateToProps)(TodoList);
