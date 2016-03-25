import React, { Component , PropTypes } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import NavList from '../components/NavList';

const NAV_LIST = [{
  name: 'Teams',
  navTo: '/teams'
},{
  name: 'Users',
  navTo: '/users'
},{
  name: 'Roles',
  navTo: '/roles'
},{
  name: 'Resources',
  navTo: '/resources'
},{
  name: 'Credential Report',
  navTo: '/credential'
}]

class UserManagementPage extends Component {
  static propTypes = {}

  static contextTypes = { // https://facebook.github.io/react/docs/context.html
    router: React.PropTypes.object.isRequired 
  }

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    }

    NAV_LIST.forEach((item, index) => {
      if(item.navTo === this.props.location.pathname) {
        this.state.activeIndex = index;
      }
    });
  }

  render() {
    return (
      <div className='user-management-page side-pane-container'>
        <div className='sidenav'>
          <NavList list={ NAV_LIST } activeIndex={ this.state.activeIndex }/>
        </div>
        <div className='content-pane'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(UserManagementPage)