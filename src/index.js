import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Warning from './components/Warning/Warning';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

const routing = (
  <Router>
    <Route path='/'>
      {localStorage.getItem('test-4') ? <Redirect to="/santaPage/warning" /> : <App />}
    </Route>
    <Route exact path='/santaPage/warning'>
      <Warning />
    </Route>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
