import React, { Component , PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { 
  requestUserAct,
  requestLogoutAct
} from '../actions/Session'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    this.props.requestUserAct();
  }

  handleLogout(e) {
    console.log('click foo')
    this.props.requestLogoutAct();
  }

  render() {
    const { name } = this.props;

    return (
      <nav id='header' className='bg-primary clearfix'>
        <div className='nav-brand'>
          <Link to='/'>Modulator</Link>
        </div>
        <div className='nav-profile profile last clearfix'>
          <div className='pull-left'><i className="fa fa-user icon"></i></div>
          <div className='pull-left'>Welcome, <br />{ name }</div>
          <ul className='nav-profile-content'>
            <li><Link to='/settings'>Settings</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <hr />
            <li onClick={this.handleLogout}><a>Logout</a></li>
          </ul>
        </div>
        <div className='nav-profile info clearfix'>
          <div className='pull-left'><i className="fa fa-bell"></i></div>
        </div>
        <div className='nav-profile menu clearfix'>
          <div className='pull-left'><i className="fa fa-bars"></i></div>
          <ul className='nav-profile-content'>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/team'>Team</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { name } = state.sessionReducer;

  return {
    name
  }
}

export default connect(mapStateToProps, {
  requestLogoutAct,
  requestUserAct
})(Header)