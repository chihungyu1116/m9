import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './pages/Layout';
import App from './pages/App';
import Login from './pages/Login';
import Common from './pages/Common';
import Team from './pages/Team';
import Dashboard from './pages/Dashboard';
import TeamEdit from './pages/TeamEdit';
import session from './lib/session';
import request from './lib/request';

function isClient() {
   return typeof window != 'undefined' && window.document;
}

function requireLogin(nextState, replace) {
  if(isClient() && session.loggedIn()) {
    replace({ nextPathname: nextState.location.pathname }, '/dashboard') ;
  }
}

function requireAuth(nextState, replace, cbFunc) {
  if (isClient()) {
    session.auth()
      .catch((res) => {
        if(res.status === 401 || res.status === 500){
          session.clearAuthToken();
          replace({ nextPathname: nextState.location.pathname }, '/login') 
        }

        return res;
      })
      .then((res) => {
        cbFunc()
      });
  } else {
    cbFunc()
  }
}

export default (
  <Route component={Layout} path='/'>
    <Route name='login' component={Login} path='login' onEnter={requireLogin} />
    <Route name='home' component={App} path='/dashboard' onEnter={requireAuth}>
      <IndexRoute name='team' component={Dashboard} />
      <Route name='team' component={Common} path='/team'>
        <IndexRoute name='team' component={Team} />
        <Route name='new' component={TeamEdit} path='/team/new' />
        <Route name='edit' component={TeamEdit} path='/team/edit/:id' />
      </Route>
    </Route>
  </Route>
);