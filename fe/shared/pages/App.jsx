import React, { Component , PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../containers/Header';
import Breadcrumb from '../containers/Breadcrumb';
import Notification from '../containers/Notification';
import session from '../lib/session';
import { afterRedirectAct } from '../actions/Route';

class AppPage extends React.Component {
  static contextTypes = { // https://facebook.github.io/react/docs/context.html
    router: React.PropTypes.object.isRequired 
  }

  static propTypes = {
    children: PropTypes.object
  };

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.authToken == null) {
      session.clearAuthToken();
      this.context.router.replace('/login');
    } else if(nextProps.redirect != null) {
      this.context.router.replace(nextProps.redirect);
      this.props.afterRedirectAct();
    }

  }
  
  render() {
    const { routes, params } = this.props

    return (
      <div id="app-page">
        <Header />
        <Breadcrumb routes={routes} params={params} />
        <Notification />
        <div className="container-fluid">
          { this.props.children }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authToken } = state.sessionReducer;
  const { redirect } = state.routeReducer;

  return {
    authToken,
    redirect
  }
}

export default connect(mapStateToProps, {
  afterRedirectAct
})(AppPage)