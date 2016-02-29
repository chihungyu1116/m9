import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Tree from '../components/Tree';
import _cloneDeep from 'lodash/fp/cloneDeep';
import { updateResourceTreeAct, updateResourceInputAct } from '../actions/Role';

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

  _handleTreeChange(tree) {
    const { updateResourceTreeAct, updateResourceInputAct } = this.props;

    let resourceInput = [];
    getResources(tree);

    function getResources(tree) {
      const controllers = tree.children;

      controllers.forEach((controller) => {
        const actions = controller.children || [];

        actions.forEach((action) => {
          if(action.checked) {
            resourceInput.push({
              controller: controller.label,
              action: action.label
            });  
          }
        });
      });
    }

    updateResourceTreeAct(tree);
    updateResourceInputAct(resourceInput);
  }

  render() {
    const {
      fields: { id, name, resources },
      handleSubmit,
      resourceTree
    } = this.props;

    return (
      <form onSubmit={ handleSubmit.bind(this) }>
        <input type="hidden" className="form-control" id="id" { ...id } />
        <input type="hidden" className="form-control" id="resources" { ...resources } />
        <fieldset className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" id="name" placeholder="Controller" {...name} autoComplete="off"/>
        </fieldset>
        <Tree tree={ resourceTree } handleTreeChange={ this._handleTreeChange }/>
        <button className="btn btn-primary btn-block" type="submit">Submit</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  const { resourceTree, resourceInput } = state.roleReducer

  return {
    resourceTree,
    initialValues: {
      resources: resourceInput
    }
  };
}

export default reduxForm({
  form,
  fields
},
mapStateToProps, {
  updateResourceTreeAct,
  updateResourceInputAct
})(RoleForm);