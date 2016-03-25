import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import TeamForm from '../forms/TeamForm';
import UserForm from '../forms/UserForm';
import UserSearchForm from '../forms/UserSearchForm';
import {
  requestTeamNewAct,
  requestTeamShowAct,
  requestTeamCreateAct,
  requestTeamUpdateAct,
  handleRoleSelectAct
} from '../actions/Team';

class TeamEditPage extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this._handleTeamSubmit = this._handleTeamSubmit.bind(this);
    this._handleUserSubmit = this._handleUserSubmit.bind(this);
    this._handleUserSearchSubmit = this._handleUserSearchSubmit.bind(this);
  }

  componentWillMount() {
    const { requestTeamNewAct, requestTeamShowAct, params } = this.props;

    if(this._isEditPage()) {
      requestTeamShowAct(params)
    } else {
      requestTeamNewAct();
    }
  }

  _handleTeamSubmit(values) {
    const { requestTeamCreateAct, requestTeamUpdateAct } = this.props;

    if(this._isEditPage()) {
      requestTeamUpdateAct(values);
    } else {
      requestTeamCreateAct(values);
    }
  }

  _handleUserSubmit(values) {
    console.log('values: ', values);
  }

  _handleUserSearchSubmit(values) {
    console.log('user search submit', values);
  }

  _isEditPage() {
    const { location } = this.props;
    return location.pathname !== '/team/new';  
  }

  render() {
    const { handleRoleSelectAct } = this.props

    return (
      <div id='team-edit-page' className='page'>
        <TeamForm onSubmit={ this._handleTeamSubmit } handleRoleSelect={ handleRoleSelectAct }/>
      </div>
    );
  }
}

// <UserSearchForm onSubmit={ this._handleUserSearchSubmit } />
// <UserForm onSubmit={ this._handleUserSubmit } />

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {
  requestTeamNewAct,
  requestTeamShowAct,
  requestTeamCreateAct,
  requestTeamUpdateAct,
  handleRoleSelectAct
})(TeamEditPage)