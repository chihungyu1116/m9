import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import List from '../components/List';
import { requestRoleIndexAct } from '../actions/Role';

const FIELDS = [{
  name: 'id', label: 'Id'
}, {
  name: 'name', label: 'Role Name'
}, {
  name: 'updated_at', label: 'Updated At', type: 'time'
}, {
  name: 'created_at', label: 'Created At', type: 'time'
}];

class TeamPage extends Component {
  static propTypes = {
    
  };

  static contextTypes = { // https://facebook.github.io/react/docs/context.html
    router: React.PropTypes.object.isRequired 
  }


  constructor(props) {
    super(props);
    this._handleRowClick = this._handleRowClick.bind(this);
  }

  componentWillMount() {
    this.props.requestRoleIndexAct({});
  }

  _handleRowClick(row) {
    this.context.router.replace(`/role/edit/${row.id}`);
  }

  render() {
    const fields = FIELDS;
    const rows = this.props.roles;

    return (
      <div id='role-page'>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className='btn btn-primary' to='/role/new'>Create</Link>
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