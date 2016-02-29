import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import List from '../components/List';
import { requestRoleIndexAct } from '../actions/Role';


const HEADS = ['id', 'name', 'leads', 'allowed_roles'] 

class TeamPage extends Component {
  static propTypes = {
    
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestRoleIndexAct({});
  }

  render() {
    const fields = FIELDS;
    const rows = this.props.roles;

    return (
      <div id='team-page'>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className='btn btn-primary' to='/team/new'>Create</Link>
          </li>
        </ul>
        <List
          rows={ rows }
          fields={ fields }
          handleRowClick={ this._handleRowClick } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { roles = [] } = state.roleReducer;

  return {
    roles
  }
}

export default connect(mapStateToProps, {
  requestRoleIndexAct
})(TeamPage)