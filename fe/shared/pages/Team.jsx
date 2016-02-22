import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import List from '../components/List';

const STYLES = {
  nav: {
    paddingBottom: '15px'
  }  
}

const HEADS = ['id', 'name', 'leads', 'allowed_roles'] 

class TeamPage extends Component {
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

    console.log('team page',this.props)
    const { dispatch } = this.props;

    return (
      <div id='team-page'>
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

})(TeamPage)