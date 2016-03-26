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
  requestTeamUpdateAct
} from '../actions/Team';

class TeamEditPage extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this._handleTeamSubmit = this._handleTeamSubmit.bind(this);
  }

  componentWillMount() {
    const { dispatch, params } = this.props;

    if(this._isEditPage()) {
      dispatch(requestTeamShowAct(params));
    } else {
      dispatch(requestTeamNewAct());
    }
  }

  _handleTeamSubmit(values) {
    const { dispatch } = this.props;

    if(this._isEditPage()) {
      dispatch(requestTeamUpdateAct(values));
    } else {
      dispatch(requestTeamCreateAct(values));
    }
  }

  _isEditPage() {
    const { location } = this.props;
    return location.pathname !== '/team/new';  
  }

  render() {
    return (
      <div id='team-edit-page' className='page'>
        <TeamForm onSubmit={ this._handleTeamSubmit } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(TeamEditPage)