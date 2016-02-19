import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as SessionActions from '../actions/SessionActions';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';

const STYLES = {
  container: {
    width: '420px',
    margin: '0 auto',
    padding: '15px'
  },
  links: {
    padding: '15px 0 0',
    textAlign: 'center'
  } 
}

class LoginPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  static needs = [
    
  ];

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('called')
  }

  render() {
    const { dispatch } = this.props;

    return (
      <div id="login-container" style={STYLES.container}>
        <LoginForm onSubmit={this.handleSubmit}/>
        <p style={STYLES.links}>
          <Link to="signup">Sign Up</Link>
        </p>
      </div>
    );
  }
}

export default connect(state => ({ todos: state.todos }))(LoginPage)