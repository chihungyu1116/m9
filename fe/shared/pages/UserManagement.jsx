import React, { Component , PropTypes } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import NavList from '../components/NavList';
import { selectNavListAct } from '../actions/Team';

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
    this._handleNavListClick = this._handleNavListClick.bind(this);
  }

  componentWillMount() {
    this._markNavListActiveIndex();
  }

  componentDidUpdate() {
    this._markNavListActiveIndex();
  }

  _markNavListActiveIndex() {
    const { dispatch, location } = this.props;
    let found = false;

    NAV_LIST.forEach((item, index) => {
      if(item.navTo === location.pathname) {
        dispatch(selectNavListAct(index));
        found = true;
      }
    });

    if(!found) {
      dispatch(selectNavListAct(0));
    }
  }

  _handleNavListClick(index) {
    this.props.dispatch(selectNavListAct(index));
  }

  render() {
    return (
      <div className='user-management-page side-pane-container'>
        <div className='sidenav'>
          <NavList
            list={ NAV_LIST }
            activeIndex={ this.props.navListActiveIndex }
            handleClick={ this._handleNavListClick } />
        </div>
        <div className='content-pane'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { navListActiveIndex } = state.teamReducer;

  return {
    navListActiveIndex
  };
}

export default connect(mapStateToProps)(UserManagementPage)