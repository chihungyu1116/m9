import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Tree from '../components/Tree';
import _cloneDeep from 'lodash/fp/cloneDeep';
import { updateResourceTreeAct } from '../actions/Role';

export const form = 'role';
export const fields = ['id', 'name', 'resources'];

class RoleForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this._handleTreeChange = this._handleTreeChange.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
  }

  _handleTreeChange(tree, id) {
    this.props.updateResourceTreeAct(tree);
  }

  render() {
    const {
      fields: { id, name, resources },
      handleSubmit,
      resourceTree
    } = this.props;

    return (
      <form onSubmit={ handleSubmit.bind(this) }>
        <input type="hidden" className="form-control" id="id" {...id} />
        <input type="hidden" className="form-control" id="resources" {...resources} />
        <fieldset className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" id="name" placeholder="Controller" {...name} autoComplete="off"/>
        </fieldset>
        <Tree tree={resourceTree} handleTreeChange={this._handleTreeChange}/>
        <button className="btn btn-primary btn-block" type="submit">Submit</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  const { resourceTree } = state.roleReducer

  return {
    resourceTree,
    initialValues: {}
  };
}

export default reduxForm({
  form,
  fields
},
mapStateToProps, {
  updateResourceTreeAct
})(RoleForm);