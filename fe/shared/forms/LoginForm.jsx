import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const form = 'login';
export const fields = ['username', 'password', 'tenant'];

const STYLES = {
  tenant: {
    marginBottom: '10px'
  },
}

class LoginForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const {
      fields: { username, password, tenant },
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div style={STYLES.tenant}>
          <select className="c-select" {...tenant}>
            <option value="walmart">Walmart</option>
            <option value="sams">Sams</option>
            <option value="asda">ASDA</option>
          </select>
        </div>

        <fieldset className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" id="username" placeholder="Username" {...username} />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input type="text" className="form-control" id="password" placeholder="Password" {...password} />
        </fieldset>
        <button className="btn btn-primary btn-block" type="submit">Login</button>
      </form>
    )
  }
}

export default reduxForm({
  form,
  fields
})(LoginForm);