import React, { Component , PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import List from '../components/List';
import { requestResourceIndexAct } from '../actions/Resource';

const FIELDS = [{
  name: 'id', label: 'Id'
}, {
  name: 'controller', label: 'Controller'
}, {
  name: 'action', label: 'Action'
}, {
  name: 'updated_at', label: 'Updated At', type: 'time'
}, {
  name: 'created_at', label: 'Created At', type: 'time'
}];

class ResourcePage extends Component {
  static propTypes = {
    
  };

  static contextTypes = { // https://facebook.github.io/react/docs/context.html
    router: React.PropTypes.object.isRequired 
  }

  constructor(props) {
    super(props);
    this._handleRowClick = this._handleRowClick.bind(this);
  }

  componentWillMount() {
    this.props.requestResourceIndexAct({});
  }

  _handleRowClick(row) {
    this.context.router.replace(`/resource/edit/${row.id}`);
  }

  render() {
    const fields = FIELDS;
    const rows = this.props.resources;

    return (
      <div id='resource-page'>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className='btn btn-primary' to='/resource/new'>Create</Link>
          </li>
        </ul>
        <List
          rows={ rows }
          fields={ fields } 
          handleRowClick={ this._handleRowClick } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { resources = [] } = state.resourceReducer;

  return {
    resources
  }
}

export default connect(mapStateToProps, {
  requestResourceIndexAct
})(ResourcePage)