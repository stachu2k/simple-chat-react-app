import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { changeNickname } from 'actions';
import { fetchRooms } from 'operations';
import chatApp from 'reducers';
import './index.scss';

const logger = createLogger();

const store = createStore(
  chatApp,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//--------------------- TEST ------------------------------------------------------
store.dispatch(changeNickname('Stachu'));
store.dispatch(fetchRooms());
window.store = store;
//--------------------- /TEST ------------------------------------------------------
