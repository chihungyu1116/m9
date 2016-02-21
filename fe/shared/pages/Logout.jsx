import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const STYLES = {
}

class LogoutPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.dispatch
  }

  render() {
    const { dispatch } = this.props;

    return (
      <div id="logout-page">
        You are not logged out
      </div>
    );
  }
}

export default connect(state => ({}))(LogoutPage)