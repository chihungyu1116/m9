import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Public from './pages/Public';
import App from './pages/App';
import Login from './pages/Login';
import Common from './pages/Common';
import Team from './pages/Team';
import TeamEdit from './pages/TeamEdit';
import Resource from './pages/Resource';
import ResourceEdit from './pages/ResourceEdit';
import Role from './pages/Role';
import RoleEdit from './pages/RoleEdit';
import Dashboard from './pages/Dashboard';
import session from './lib/session';
import request from './lib/request';

function isClient() {
   return typeof window != 'undefined' && window.document;
}

function checkRoute(nextState, replace) {
  if(isClient() && session.loggedIn()) {
    replace({ nextPathname: nextState.location.pathname }, '/dashboard') ;
  }
}

function checkAuth(nextState, replace, cbFunc) {
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
        cbFunc();
      });
  } else {
    cbFunc();
  }
}

export default (
  <Route component={ Public } path='/'>
    <IndexRoute component={ Login } onEnter={ checkRoute } />
    <Route component={ Login } path='login' onEnter={ checkRoute } />
    <Route breadcrumb='dashboard' component={ App } path='/dashboard'>
      <IndexRoute component={ Dashboard } onEnter={ checkAuth } />
      <Route breadcrumb='team' component={ Common } path='/team'>
        <IndexRoute component={ Team } onEnter={ checkAuth } onEnter={ checkAuth } />
        <Route breadcrumb='new' component={ TeamEdit } path='/team/new' onEnter={ checkAuth } />
        <Route breadcrumb='edit' component={ TeamEdit } path='/team/edit/:id' onEnter={ checkAuth } />
      </Route>
      <Route breadcrumb='resource' component={ Common } path='/resource'>
        <IndexRoute component={ Resource } onEnter={ checkAuth } onEnter={ checkAuth } />
        <Route breadcrumb='new' component={ ResourceEdit } path='/resource/new' onEnter={ checkAuth } />
        <Route breadcrumb='edit' component={ ResourceEdit } path='/resource/edit/:id' onEnter={ checkAuth } />
      </Route>
      <Route breadcrumb='role' component={ Common } path='/role'>
        <IndexRoute component={ Role } onEnter={ checkAuth } onEnter={ checkAuth } />
        <Route breadcrumb='new' component={ RoleEdit } path='/role/new' onEnter={ checkAuth } />
        <Route breadcrumb='edit' component={ RoleEdit } path='/role/edit/:id' onEnter={ checkAuth } />
      </Route>
    </Route>
  </Route>
);