import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const form = 'resource';
export const fields = ['id', 'controller', 'action'];

class ResourceForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
  }

  render() {
    const {
      fields: { id, controller, action },
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={ handleSubmit.bind(this) }>
        <input type="hidden" className="form-control" id="id" {...id} />
        <fieldset className="form-group">
          <label>Controller</label>
          <input type="text" className="form-control" id="controller" placeholder="Controller" {...controller} autoComplete="off"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Action</label>
          <input type="text" className="form-control" id="action" placeholder="Action" {...action} autoComplete="off"/>
        </fieldset>
        <button className="btn btn-primary btn-block" type="submit">Submit</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  const { resource = {} } = state.resourceReducer;
  const { id, controller, action } = resource;

  return {
    initialValues: {
      id,
      controller,
      action
    }
  };
}

export default reduxForm({
  form,
  fields
},
mapStateToProps, {})(ResourceForm);