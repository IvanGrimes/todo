import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import SignInContainer from '../containers/SignInContainer';
import { connect } from 'react-redux';

const App = () => (
  <Fragment>
    <SignInContainer />
  </Fragment>
);

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  isAuth: store.user.auth,
});

export default connect(mapStateToProps)(App);
