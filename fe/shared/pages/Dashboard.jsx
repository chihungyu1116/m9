import React, { Component , PropTypes } from 'react';
import { Link } from 'react-router';

export default class DashboardPage extends React.Component {
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
        <h3>Modulator Dashboard</h3>

        <ul>
          <li><Link to='/user-management'>User Management</Link></li>
        </ul>
      </div>
    );
  }
}