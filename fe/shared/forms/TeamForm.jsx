import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const form = 'team';
export const fields = ['name', 'allowed_roles', 'leads', 'notes'];

class TeamForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const {
      fields: { name, allowed_roles, leads, notes },
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <label>Team Name</label>
          <input type="text" className="form-control" id="name" placeholder="Team name" {...name} autoComplete="off"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Allowed Roles</label>
          <input type="text" className="form-control" id="allowed_roles" placeholder="Allowed Roles" {...allowed_roles} />
        </fieldset>
        <fieldset className="form-group">
          <label>Leads</label>
          <input type="text" className="form-control" id="leads" placeholder="Leads" {...leads} />
        </fieldset>
        <fieldset className="form-group">
          <label>Notes</label>
          <textarea className="form-control" id="notes" placeholder="Notes" {...notes} />
        </fieldset>
        <button className="btn btn-primary btn-block" type="submit">Create</button>
      </form>
    )
  }
}

export default reduxForm({
  form,
  fields
})(TeamForm);