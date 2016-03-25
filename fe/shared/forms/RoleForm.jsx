import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Tree from '../components/Tree';
import _cloneDeep from 'lodash/fp/cloneDeep';
import {
  updateRoleResourcesAct
} from '../actions/Role';

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

  _handleTreeChange(tree) {
    const { dispatch } = this.props;

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

    dispatch(updateRoleResourcesAct(resourceInput));
  }

  render() {
    const {
      fields: {
        id: idField,
        name: nameField,
        resources: resourcesField 
      },
      handleSubmit,
      resourceTree
    } = this.props;

    return (
      <form onSubmit={ handleSubmit.bind(this) }>
        <input type="hidden" className="form-control" id="id" { ...idField } />
        <input type="hidden" className="form-control" id="resources" { ...resourcesField } />
        <fieldset className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" id="name" placeholder="Role Name" { ...nameField } autoComplete="off"/>
        </fieldset>
        <Tree tree={ resourceTree } handleTreeChange={ this._handleTreeChange }/>
        <button className="btn btn-primary btn-block" type="submit">Submit</button>
      </form>
    )
  }
}



function mapStateToProps(state) {
  const { role, roleResources, resources } = state.roleReducer
  let counter = 0;

  let resourceTree = {
    id: counter++,
    label: 'all',
    checked: false,
    children: []
  }

  createTree(roleResources, resources);

  function createTree(roleResources, resources) {
    let controllerMap = {};

    // Categorized controller and actions
    resources.forEach((resource) => {
      const controllerName = resource.controller;
      const actionName = resource.action;

      controllerMap[controllerName] = controllerMap[controllerName] || {};
      controllerMap[controllerName][actionName] = {
        name: actionName,
        checked: false
      };
    });

    // Map selected resource
    roleResources.forEach((roleResource) => {
      const controllerName = roleResource.controller;
      const actionName = roleResource.action;
      
      controllerMap[controllerName][actionName].checked = true;
    });

    let controllers = resourceTree.children;
    let allControllersChecked = true;

    // Build tree
    for(let controllerName in controllerMap) {
      let controller = {
        id: counter++,
        label: controllerName,
        checked: controllerMap[controllerName].checked,
        children: []
      };

      let allActionsChecked = true;

      for(let actionName in controllerMap[controllerName]) {
        allActionsChecked = allActionsChecked && controllerMap[controllerName][actionName].checked;

        let action = {
          id: counter++,
          label: actionName,
          checked: controllerMap[controllerName][actionName].checked
        };

        controller.children.push(action);
      }

      if(allActionsChecked) {
        controller.checked = true;
      }

      controllers.push(controller);
      allControllersChecked = allControllersChecked && controller.checked;
    }

    if(allControllersChecked) {
      resourceTree.checked = true;
    }
  }

  const { id = '', name = '' } = role;

  return {
    resourceTree,
    initialValues: {
      id,
      name,
      resources: roleResources
    }
  };
}

export default reduxForm({
  form,
  fields,
  destroyOnUnmount: true
},
mapStateToProps)(RoleForm);