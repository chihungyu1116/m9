import React, { Component , PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { 
  requestUserAct,
  requestLogoutAct
} from '../actions/Session'

const STYLES = {};

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
          <Link to='/' style={STYLES.navBrandLink}>Modulator</Link>
        </div>
        <div className='nav-profile primary last clearfix' onClick=''>
          <div className='pull-left'><i className="fa fa-user icon"></i></div>
          <div className='pull-left'>Welcome, <br />{ name }</div>
          <ul className='nav-profile-content'>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <hr />
            <li onClick={this.handleLogout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div className='nav-profile secondary'>
          
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