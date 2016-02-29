import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import List from '../components/List';

const HEADS = ['id', 'name', 'leads', 'allowed_roles'] 

class TeamPage extends Component {
  static propTypes = {
    
  };

  constructor(props) {
    super(props);
  }

  _renderList() {
    const rows = [];
    const heads = HEADS;

    return (
      <List rows={rows} heads={heads} />
    )
  }

  render() {
    const { dispatch } = this.props;

    return (
      <div id='team-page'>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className='btn btn-primary' to='/team/new'>Create</Link>
          </li>
        </ul>
        { this._renderList() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, {

})(TeamPage)