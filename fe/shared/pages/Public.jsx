import React, { Component , PropTypes } from 'react';
import { connect } from 'react-redux';
import session from '../lib/session';

class PublicPage extends React.Component {
  static contextTypes = { // https://facebook.github.io/react/docs/context.html
    router: React.PropTypes.object.isRequired 
  }

  static propTypes = {
    children: PropTypes.object
  };

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.authToken && (
        this.props.location.pathname === '/' ||
        this.props.location.pathname === '/login' ||
        this.props.location.pathname === '/signup')) {
      this.context.router.replace('/dashboard');
    }
  }
  
  render() {
    return (
      <div id="public-page">
        {this.props.children}
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { authToken } = state.sessionReducer;
  
  if(authToken) {
    session.setAuthToken(authToken);
  }

  console.log('public state: ', state);

  return {
    authToken
  }
}


export default connect(mapStateToProps)(PublicPage)