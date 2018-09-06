import React  from 'react';
import PropTypes from 'prop-types';
import SignInContainer from '../SignIn/SignInContainer';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import TodoListContainer from '../TodoList/TodoListContainer';
import './App.css';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/login" component={SignInContainer} />
      <Route path="/" component={TodoListContainer} />
    </Switch>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
