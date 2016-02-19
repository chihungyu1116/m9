import React, { Component , PropTypes } from 'react';
import HeaderView                       from './HeaderView';

const STYLES = {
  container: {
    padding: '15px 0',
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

  componentDidMount = () => {
    // this.context.router.push('/home');
  }
  
  render() {
    return (
      <div id="app-view">
        <HeaderView />

        <div className="container-fluid" style={STYLES.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}