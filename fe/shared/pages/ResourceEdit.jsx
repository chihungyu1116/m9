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
    const { requestResourceNewAct, requestResourceShowAct, params } = this.props;

    if(this._isEditPage()) {
      requestResourceShowAct(params)
    } else {
      requestResourceNewAct();
    }
  }

  _handleSubmit(values) {
    const { requestResourceCreateAct, requestResourceUpdateAct } = this.props;

    if(this._isEditPage()) {
      requestResourceUpdateAct(values);
    } else {
      requestResourceCreateAct(values);
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

export default connect(mapStateToProps, {
  requestResourceNewAct,
  requestResourceShowAct,
  requestResourceCreateAct,
  requestResourceUpdateAct
})(ResourceEditPage)