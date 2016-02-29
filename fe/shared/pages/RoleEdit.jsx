import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import RoleForm from '../forms/RoleForm';

class RoleEditPage extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    // this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit() {
    console.log('click foo')
  }

  render() {
    const { location } = this.props;

    const isNew = location.pathname === '/role/new'

    return (
      <div id='role-edit-page'>
        <RoleForm onSubmit={this._handleSubmit}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, {

})(RoleEditPage)