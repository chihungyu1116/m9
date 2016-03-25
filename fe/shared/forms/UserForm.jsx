import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const form = 'user';
export const fields = ['teamId', 'id', 'name', 'email', 'notes', 'password', 'roles'];

class UserForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const {
      fields: {
        teamId: teamIdField,
        id: idField,
        name: nameField,
        email: emailField,
        notes: notesField,
        password: passwordField,
        roles: rolesField
      },
      handleSubmit
    } = this.props;

    return (
      <form className='user-form clearfix' onSubmit={ handleSubmit }>
        <h6 className='text-center'>Edit Member</h6>
        <label>
          Leader <input type="checkbox" value="" />
        </label>
        <input type='hidden' className='form-control form-control-sm' id='team-id' {...teamIdField} />
        <input type='hidden' className='form-control form-control-sm' id='id' {...idField} />
        <input type='text' className='form-control form-control-sm' id='name' placeholder='Name' { ...nameField } autoComplete='off' />
        <input type='text' className='form-control form-control-sm' id='email' placeholder='Email' { ...emailField } autoComplete='off' />
        <input type='text' className='form-control form-control-sm' id='notes' placeholder='Notes' { ...notesField } autoComplete='off' />
        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  const { team = {} } = state.teamReducer;
  const { 
    id: teamId
  } = team;

  return {
    initialValues: {
      teamId
    }
  };
}

export default reduxForm({
  form,
  fields
},
mapStateToProps)(UserForm);