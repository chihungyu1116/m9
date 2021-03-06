import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const form = 'login';
export const fields = ['username', 'password', 'tenant'];
const defaultTenant = 'walmart';

class LoginForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const {
      fields: {
        username: usernameField,
        password: passwordField,
        tenant: tenantField
      },
      handleSubmit
    } = this.props;

    return (
      <form className='login-form' onSubmit={ handleSubmit }>
        <div>
          <select className="c-select" { ...tenantField }>
            <option value="walmart">Walmart</option>
            <option value="sams">Sams</option>
            <option value="asda">ASDA</option>
          </select>
        </div>

        <fieldset className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" id="username" placeholder="Username" { ...usernameField } autoComplete="off"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" { ...passwordField } autoComplete="off"/>
        </fieldset>
        <button className="btn btn-primary btn-block" type="submit">Login</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    initialValues: {
      tenant: defaultTenant
    }
  };
}

export default reduxForm({
  form,
  fields,
  destroyOnUnmount: true
},
mapStateToProps)(LoginForm);