import React, { Component , PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { 
  requestUserShowAct,
  requestLogoutAct
} from '../actions/Session'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this._handleLogout = this._handleLogout.bind(this);
  }

  componentWillMount() {
    this.props.requestUserShowAct();
  }

  _handleLogout(e) {
    this.props.requestLogoutAct();
  }

  _unreadNotifications() {
    const { notifications } = this.props;

    return notifications.filter((notification) => {
      return !notification.read;
    });
  }

  render() {
    const { name } = this.props;
    const unreadNotifications = this._unreadNotifications();



    return (
      <nav id='header' className='header-container bg-primary clearfix'>
        <div className='nav-brand'>
          <Link to='/'>Modulator</Link>
        </div>
        <div className='nav-profile profile last clearfix'>
          <div className='pull-left'><i className='fa fa-user nav-profile-fa'></i></div>
          <div className='pull-left'>Welcome, <br />{ name }</div>
          <div className='nav-profile-menu'>
            <ul>
              <li><Link to='/settings'>Settings</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
              <hr />
              <li onClick={this._handleLogout}><a>Logout</a></li>
            </ul>
          </div>
        </div>
        <div className='nav-profile info clearfix'>
          <div className='pull-left'>
            <i className='fa fa-bell nav-profile-fa'></i>
          </div>
          <div className='pull-left'>
            <i className='count'>{ unreadNotifications.length }</i>
          </div>
          {
            unreadNotifications.length === 0 ? null : (
              <div className='nav-profile-menu detailed'>
                <ul>
                {
                  unreadNotifications.map((unreadNotification, index) => {
                    return (
                      <li key={ index }>
                        <Link to='/notifications'>
                          <i className="fa fa-envelope-o"></i>
                          { unreadNotification.message }
                        </Link>
                      </li>
                    )
                  })
                }
                </ul>
              </div>
            )
          }
        </div>
        <div className='nav-profile menu'>
          <i className='fa fa-bars nav-profile-fa'></i>
          <div className='nav-profile-menu'>
            <ul>
              <li><Link to='/resource'>Resource</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
              <li><Link to='/team'>Team</Link></li>
              <li><Link to='/role'>Role</Link></li>
              <li><Link to='/user-management'>User Management</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { name } = state.sessionReducer;
  const { notifications = [] } = state.notificationReducer;

  return {
    name,
    notifications
  }
}

export default connect(mapStateToProps, {
  requestLogoutAct,
  requestUserShowAct
})(Header)