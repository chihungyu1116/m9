import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import List from '../components/List';

const HEADS = ['id', 'name', 'leads', 'allowed_roles'] 

class ResourcePage extends Component {
  static propTypes = {
    
  };

  constructor(props) {
    super(props);
  }

  renderList() {
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
            <Link className='btn btn-primary' to='/resource/new'>Create</Link>
          </li>
        </ul>
        { this.renderList() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, {

})(ResourcePage)