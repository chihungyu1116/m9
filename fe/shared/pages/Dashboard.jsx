import React, { Component , PropTypes } from 'react';

const STYLES = {
}

export default class AppView extends React.Component {
  static contextTypes = { // https://facebook.github.io/react/docs/context.html
    router: React.PropTypes.object.isRequired 
  }

  static propTypes = {
    children: PropTypes.object
  };
  
  render() {
    const { routes, params } = this.props

    return (
      <div id="dashboard-page">
        Dashboard
      </div>
    );
  }
}