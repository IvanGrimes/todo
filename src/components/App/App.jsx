import React  from 'react';
import PropTypes from 'prop-types';
import SignInContainer from '../SignIn/SignInContainer';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import TodoListContainer from '../TodoList/TodoListContainer';
import './App.css';
import SignUpContainer from '../SignUp/SignUpContainer';
import { MAIN, LOGIN, REGISTER } from "../../constants/routes";

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path={LOGIN} component={SignInContainer} />
      <Route path={REGISTER} component={SignUpContainer} />
      <Route path={MAIN} component={TodoListContainer} />
    </Switch>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
