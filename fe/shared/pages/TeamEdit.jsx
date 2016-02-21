import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const STYLES = {
  
}

class TeamEditPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  static needs = [
    
  ];

  constructor(props) {
    super(props);
  }

  isEdit() {
    
  }

  render() {
    const { dispatch } = this.props;

    this.isEdit();

    return (
      <div id='team-edit-page'>
       Team Edit
      </div>
    );
  }
}

export default connect(state => ({}))(TeamEditPage)