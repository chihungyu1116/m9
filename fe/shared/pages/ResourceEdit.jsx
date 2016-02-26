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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const { requestResourceNewAct, requestResourceShowAct, params } = this.props;

    if(this.isEditPage()) {
      requestResourceShowAct(params)
    } else {
      requestResourceNewAct();
    }
  }

  handleSubmit(values) {
    const { requestResourceCreateAct, requestResourceUpdateAct } = this.props;

    if(this.isEditPage()) {
      requestResourceUpdateAct(values);
    } else {
      requestResourceCreateAct(values);
    }
  }

  isEditPage() {
    const { location } = this.props;
    return location.pathname !== '/resource/new';  
  }

  render() {
    const { resource } = this.props;

    return (
      <div id='resource-edit-page'>
        <ResourceForm onSubmit={ this.handleSubmit } />
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