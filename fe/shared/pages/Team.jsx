import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import List from '../components/List';
import { requestTeamIndexAct } from '../actions/Team';
import { reset } from 'redux-form';

const FIELDS = [{
  name: 'id', label: 'Id'
}, {
  name: 'name', label: 'Team Name'
}, {
  name: 'leads', label: 'Leaders', type: 'tag'
}, {
  name: 'team_roles', label: 'Permitted Roles', type: 'tag'
}, {
  name: 'notes', label: 'Notes'
}, {
  name: 'updated_at', label: 'Updated At', type: 'time'
}, {
  name: 'created_at', label: 'Created At', type: 'time'
}];

class TeamPage extends Component {
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
    this.props.dispatch(requestTeamIndexAct({}));
  }

  componentWillUpdate(nextProps, nextState) {
    const { clearForm } = this.props;

    if(clearForm) {

    }
    console.log('this props', this.props, clearForm, this );
  }

  _handleRowClick(row) {
    this.context.router.push(`/team/edit/${row.id}`);
  }

  render() {
    const fields = FIELDS;
    const rows = this.props.teams;

    return (
      <div id='team-page' className='page'>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className='btn btn-primary' to='/team/new'>Create</Link>
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
  const { teams = [], clearForm } = state.teamReducer;

  return {
    teams,
    clearForm
  }
}

export default connect(mapStateToProps)(TeamPage)