import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import ButtonList from '../components/ButtonList';

export const form = 'team';
export const fields = ['id', 'name', 'notes', 'teamRoles'];

class TeamForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleRoleSelect: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const {
      users = [],
      roles = [],
      teamRoles = [],
      fields: {
        id: idField,
        name: nameField,
        notes: notesField,
        teamRoles: teamRolesField
      },
      handleSubmit,
      handleRoleSelect
    } = this.props;

    return (
      <form onSubmit={ handleSubmit }>
        <input type="hidden" className="form-control" id="id" {...idField} />
        <input type="hidden" className="form-control" id="teamRoles" {...teamRolesField} />
        <fieldset className="form-group">
          <label>Team Name</label>
          <input type="text" className="form-control" id="name" placeholder="Team name" { ...nameField } autoComplete="off"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Notes</label>
          <textarea className="form-control" id="notes" placeholder="Notes" { ...notesField } />
        </fieldset>
        <fieldset className="form-group">
          <label>Roles</label>
          <ButtonList
            selected={ teamRoles }
            list={ roles }
            matchAttr='name'
            handleButtonListChange={ handleRoleSelect } />
        </fieldset>
        <button className="btn btn-primary btn-block" type="submit">Create</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  const { team = {}, teamRoles, roles, users } = state.teamReducer;
  const { id, name, notes } = team;

  return {
    users,
    roles,
    teamRoles,
    initialValues: {
      id,
      name,
      notes,
      teamRoles
    }
  };
}

export default reduxForm({
  form,
  fields
},
mapStateToProps)(TeamForm);