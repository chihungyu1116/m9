import React, { Component , PropTypes } from 'react';
import Header from '../containers/Header';
import Breadcrumb from '../containers/Breadcrumb';
import Controls from '../containers/Controls';

const STYLES = {
  container: {
    padding: '15px',
    background: 'f8f8f9'
  }
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
      <div id="app-page">
        <Header />
        <Breadcrumb routes={routes} params={params} />
        <Controls />
        <div className="container-fluid" style={STYLES.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}