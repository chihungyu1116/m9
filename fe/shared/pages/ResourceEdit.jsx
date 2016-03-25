import React, { Component , PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ResourceForm from '../forms/ResourceForm';
import {
  requestResourceNewAct,
  requestResourceShowAct,
  requestResourceCreateAct,
  requestResourceUpdateAct
} from '../actions/Resource';

class ResourceEditPage extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentWillMount() {
    const { dispatch, params } = this.props;

    if(this._isEditPage()) {
      dispatch(requestResourceShowAct(params));
    } else {
      dispatch(requestResourceNewAct());
    }
  }

  _handleSubmit(values) {
    const { dispatch } = this.props;

    if(this._isEditPage()) {
      dispatch(requestResourceUpdateAct(values));
    } else {
      dispatch(requestResourceCreateAct(values));
    }
  }

  _isEditPage() {
    const { location } = this.props;
    return location.pathname !== '/resource/new';  
  }

  render() {
    return (
      <div id='resource-edit-page'>
        <ResourceForm onSubmit={ this._handleSubmit } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(ResourceEditPage)