import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './pages/Layout';
import App from './pages/App';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Common from './pages/Common';
import Team from './pages/Team';
import TeamEdit from './pages/TeamEdit';
// import session from './lib/session';
import request from 'axios';

function isClient() {
   return typeof window != 'undefined' && window.document;
}

function auth() {
  return request.post('http://localhost:3000/session/authenticate');
}

function requireAuth(nextState, replace, cbFunc) {
  if (isClient()) {
    auth()
      .catch((res) => {
        if(res.status === 401){
          replace({ nextPathname: nextState.location.pathname }, '/login') 
        }
      })
      .then(() => {
        cbFunc()
      });
  } else {
    cbFunc()
  }
}

export default (
  <Route component={Layout} path='/'>
    <Route name='login' component={Login} path='login' />
    <Route name='logout' component={Logout} path='logout' />
    <Route name='home' component={App} path='/' onEnter={requireAuth}>
      <Route name='team' component={Common} path='/team'>
        <IndexRoute name='team' component={Team} />
        <Route name='new' component={TeamEdit} path='/team/new' />
        <Route name='edit' component={TeamEdit} path='/team/edit/:id' />
      </Route>
    </Route>
  </Route>
);