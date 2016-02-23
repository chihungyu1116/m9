import React, { Component , PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ResourceForm from '../forms/ResourceForm';
import {
  createResourceAct,
  updateResourceAct
} from '../actions/Resource';

const STYLES = {
  form: {
    width: '400px'
  }
}

class ResourceEditPage extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { createResourceAct, updateResourceAct } = this.props;

    if(this.isEditPage()) {
      updateResourceAct(values);
    } else {
      createResourceAct(values);
    }
  }

  isEditPage() {
    const { location } = this.props;
    return location.pathname !== '/resource/new'    
  }

  render() {
    const {} = this.props;

    return (
      <div id='resource-edit-page'>
        <div style={STYLES.form}>
          <ResourceForm onSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  console.log('team edit', state)
  return {

  }
}

export default connect(mapStateToProps, {
  createResourceAct,
  updateResourceAct
})(ResourceEditPage)