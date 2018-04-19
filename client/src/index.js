import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

// new instance of redux-store
// 1st arg - dummy reducer
// 2nd arg - initial State of your application.  More Relevant for SSR
// 3rd arg - applyMiddleware
const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
