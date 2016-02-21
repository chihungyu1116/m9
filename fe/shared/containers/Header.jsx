import React, { Component , PropTypes } from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <nav id="header" className="navbar navbar-full navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Modulator</a>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Header)