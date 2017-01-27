import React from 'react';
import ReactDOM from 'react-dom'; // Pour application mobile => ReactNative
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import BookList from './BookList';
import BookDetails from './BookDetails';
import NoMatch from './NoMatch';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataBook from './dataBook';
let store = createStore(dataBook, applyMiddleware(thunk))

// Execute le component App - dans ID root (cf public/index.html)
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={BookList}/>
        <Route path="books/:id" component={BookDetails}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
