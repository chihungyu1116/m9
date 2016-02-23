import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import TeamForm from '../forms/TeamForm';

const STYLES = {
  form: {
    width: '400px'
  }
}

class TeamEditPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('click foo')
  }

  render() {
    const { location } = this.props;

    const isNew = location.pathname === '/team/new'

    return (
      <div id='team-edit-page'>
        <div style={STYLES.form}>
          <TeamForm onSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  console.log('team edit', state)
  return {

  }
}

export default connect(mapStateToProps, {

})(TeamEditPage)