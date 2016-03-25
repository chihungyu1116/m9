import React, { Component, PropTypes } from 'react';
import { reduxForm, initialize } from 'redux-form';
import ButtonList from '../components/ButtonList';

export const form = 'team';
export const fields = ['id', 'name', 'notes', 'teamRoles'];

// Complex use case of custom input
// http://redux-form.com/4.2.0/#/examples/complex?_k=u30idu
class TeamForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
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
    } = this.props;

    return (
      <form onSubmit={ handleSubmit }>
        <input type="hidden" className="form-control" id="id" {...idField} />
        
        <fieldset className="form-group">
          <label>Team Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Team name"
            autoComplete="off"
            { ...nameField }
          />
        </fieldset>
        <fieldset className="form-group">
          <label>Notes</label>
          <textarea className="form-control" id="notes" placeholder="Notes" { ...notesField } />
        </fieldset>
        <fieldset className="form-group">
          <label>Roles</label>
          <ButtonList
            {...teamRolesField} 
            list={ roles }
            matchAttr='name'
          />
        </fieldset>
        <button className="btn btn-primary btn-block" type="submit">Create</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  const { team = {}, teamRoles, roles, users } = state.teamReducer;
  const { id, name, notes } = team;
  const initialValues = { id, name, notes, teamRoles };

  return {
    users,
    roles,
    teamRoles,
    initialValues
  };
}

export default reduxForm({
  form,
  fields,
  destroyOnUnmount: true
},
mapStateToProps)(TeamForm);