import React from 'react';
import { Route } from 'react-router';
import App from './components';
import LoginPage from './pages/LoginPage';

export default (
  <Route name="app" component={App} path="/">
    <Route component={LoginPage} path="/login" />
  </Route>
);