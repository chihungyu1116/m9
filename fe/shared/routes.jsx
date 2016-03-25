import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute
} from 'react-router';
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
import UserManagement from './pages/UserManagement';
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

function auth(nextState, replace, cbFunc) {
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

// Breadcrumb relies on the absolute path for redirect
// Please make sure to use full path only

export default (
  <Route component={ Public } path='/'>
    <IndexRoute component={ Login } onEnter={ checkRoute } />
    <Route component={ Login } path='login' onEnter={ checkRoute } />

    <Route breadcrumb='dashboard' component={ App } path='/dashboard'>
      <IndexRoute component={ Dashboard } onEnter={ auth } />

      // User Management Group
      <Route breadcrumb='user management' component={ UserManagement } path='/user-management'>
        <IndexRoute component={ Team } onEnter={ auth } onEnter={ auth } />

        <Route breadcrumb='resources' component={ Common } path='/resources'>
          <IndexRoute component={ Resource } onEnter={ auth } onEnter={ auth } />
          <Route breadcrumb='create resource' component={ ResourceEdit } path='/resource/new' onEnter={ auth } />
          <Route breadcrumb='edit resource' component={ ResourceEdit } path='/resource/edit/:id' onEnter={ auth } />
        </Route>
        <Route breadcrumb='teams' component={ Common } path='/teams'>
          <IndexRoute component={ Team } onEnter={ auth } onEnter={ auth } />
          <Route breadcrumb='create team' component={ TeamEdit } path='/team/new' onEnter={ auth } />
          <Route breadcrumb='edit team' component={ TeamEdit } path='/team/edit/:id' onEnter={ auth } />
        </Route>
        <Route breadcrumb='roles' component={ Common } path='/roles'>
          <IndexRoute component={ Role } onEnter={ auth } onEnter={ auth } />
          <Route breadcrumb='create role' component={ RoleEdit } path='/role/new' onEnter={ auth } />
          <Route breadcrumb='edit role' component={ RoleEdit } path='/role/edit/:id' onEnter={ auth } />
        </Route>
      </Route>

    </Route>
  </Route>
);