import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const form = 'user-search';
export const fields = ['name'];

class UserSearchForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const {
      fields: {
        name: nameField
      },
      handleSubmit
    } = this.props;

    return (
      <form className='user-search-form clearfix' onSubmit={ handleSubmit }>
        <div className="user-look-up input-group">
          <input type="text" className="form-control" placeholder="Enter Member Name" id='name' { ...nameField }/>
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit">Member Look Up</button>
          </span>
        </div>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    initialValues: {
    }
  };
}

export default reduxForm({
  form,
  fields,
  destroyOnUnmount: true
},
mapStateToProps)(UserSearchForm);