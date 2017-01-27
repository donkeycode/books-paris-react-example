import React from 'react';
import ReactDOM from 'react-dom'; // Pour application mobile => ReactNative
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'; // CSS importé automatiquement (webpack)

import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import BookList from './BookList';
import BookDetails from './BookDetails';
import NoMatch from './NoMatch';

// Execute le component App - dans ID root (cf public/index.html)
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BookList}/>
      <Route path="books/:id" component={BookDetails}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
