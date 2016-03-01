import React, { PropTypes } from 'react';
import _cloneDeep from 'lodash/fp/cloneDeep';

class ChildNode extends React.Component {
  static propTypes: {
    level: PropTypes.number.isRequired,
    checked: PropTypes.bool.isRequired,
    handleTreeChange: PropTypes.func.isRequired
  }

  render() {
    const { children, checked, handleTreeChange, level } = this.props;
    
    return (
      <div className='node-list'>
        {
          children.map((child, index) => {
            return <Node key={index} {...child} handleTreeChange={ handleTreeChange } level={level}/>
          })
        }
      </div>
    )
  }
}

class Node extends React.Component {
  static propTypes: {
    id: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    expanded: PropTypes.bool,
    children: PropTypes.array
  }

  constructor(props) {
    super(props);
    this._handleNodeClick = this._handleNodeClick.bind(this);
  }

  _handleNodeClick() {
    this.props.handleTreeChange(this.props.id);
  }

  render() {
    const { id, label, checked, children, handleTreeChange, isRoot, level } = this.props;
    const hasChild = !!(children && children.length);

    return (
      <div id={'node-' + id} className={ 'node-level-' + level }>
        <div className='clearfix node-control'>
          <div className='node-control-label'>{ label }</div>
          <div className='node-control-input' onClick={ this._handleNodeClick }>
            <i className={ "fa " + (checked ? "fa-check-square" : "fa-check-square-o") }></i>
          </div>
        </div>
        {
          hasChild ?
            <ChildNode checked={ checked } children={ children } handleTreeChange={ handleTreeChange } level={level + 1}/> : null
        }
      </div>
    )
  }
}

export default class Tree extends React.Component {
  static propTypes = {
    tree: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this._handleTreeChange = this._handleTreeChange.bind(this);
  }

  _handleTreeChange(id) {
    let { tree } = this.props;
    let newTree = _cloneDeep(tree);

    traverseTree(newTree, id);

    function traverseTree(node, id, checked) {
      if(node.id === id){
        checked = !node.checked;
      }

      if(checked !== undefined) {
        node.checked = checked;
      }

      if(node.children && node.children.length) {
        node.children.forEach((child) => {
          traverseTree(child, id, checked);
        });
      }
    }

    this.props.handleTreeChange(newTree);
  }

  render() {
    const { tree } = this.props;

    return (
      <div className='tree' ref='tree'>
        <Node className='node' { ...tree } handleTreeChange={ this._handleTreeChange } isRoot={ true } level={1}/>
      </div>
    )
  }
}