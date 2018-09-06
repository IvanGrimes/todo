import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.querySelector('.root'),
);

registerServiceWorker();
