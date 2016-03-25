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
    const { dispatch, params } = this.props;

    if(this.isEditPage()) {
      dispatch(requestRoleShowAct(params));
    } else {
      dispatch(requestRoleNewAct());
    }
  }

  _handleSubmit(values) {
    const { dispatch } = this.props;

    if(this.isEditPage()) {
      dispatch(requestRoleUpdateAct(values));
    } else {
      dispatch(requestRoleCreateAct(values));
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

export default connect(mapStateToProps)(RoleEditPage)