import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import RoleForm from '../forms/RoleForm';
import {
  requestRoleNewAct,
  requestRoleShowAct,
  requestRoleCreateAct,
  requestRoleUpdateAct
} from '../actions/Role';

class RoleEditPage extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentWillMount() {
    const { requestRoleNewAct, requestRoleShowAct, params } = this.props;

    if(this.isEditPage()) {
      requestRoleShowAct(params)
    } else {
      requestRoleNewAct();
    }
  }

  _handleSubmit(values) {
    const { requestRoleCreateAct, requestRoleUpdateAct } = this.props;

    if(this.isEditPage()) {
      requestRoleUpdateAct(values);
    } else {
      requestRoleCreateAct(values);
    }
  }

  isEditPage() {
    const { location } = this.props;
    return location.pathname !== '/role/new';  
  }

  render() {
    const { location } = this.props;

    const isNew = location.pathname === '/role/new'

    return (
      <div id='role-edit-page'>
        <RoleForm onSubmit={this._handleSubmit} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {
  requestRoleNewAct,
  requestRoleShowAct,
  requestRoleCreateAct,
  requestRoleUpdateAct
})(RoleEditPage)