import React, { Component , PropTypes } from 'react';

export default class AppView extends React.Component {
  static contextTypes = { // https://facebook.github.io/react/docs/context.html
    router: React.PropTypes.object.isRequired 
  }

  static propTypes = {
    children: PropTypes.object
  };

  componentWillMount() {
    this.context.router.replace('/dashboard')     
  }
  
  render() {
    return (
      <div id="layout-page">
        {this.props.children}
      </div>
    );
  }
}