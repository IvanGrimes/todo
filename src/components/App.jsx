import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import SignInContainer from '../containers/SignInContainer';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import TodoContainer from '../containers/TodoContainer';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/login" component={SignInContainer} />
      <Route path="/" component={TodoContainer} />
    </Switch>
  </ConnectedRouter>
);

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  isAuth: store.user.auth,
});

export default connect(mapStateToProps)(App);
