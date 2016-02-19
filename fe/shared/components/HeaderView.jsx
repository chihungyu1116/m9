import React, { Component , PropTypes } from 'react';

export default class HeaderView extends React.Component {
  render() {
    return (
      <nav id="header" className="navbar navbar-full navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Modulator</a>
      </nav>
    );
  }
}