import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import List from '../components/List';

class CommonPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  static needs = [];

  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch } = this.props;

    return (
      <div id='common-page'>
        {this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(CommonPage)