import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { requestLoginAct } from '../actions/Session';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';

const STYLES = {
  loginPage: {
    margin: '0 auto',
    padding: '15px',
    width: '420px'
  },
  links: {
    padding: '15px 0 0',
    textAlign: 'center'
  } 
}

class LoginPage extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.requestLoginAct()
  }

  render() {
    return (
      <div id="login-page" style={STYLES.loginPage}>
        <LoginForm onSubmit={this.handleSubmit}/>
        <p style={STYLES.links}>
          <Link to="signup">Sign Up</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state ', state)

  return {

  }
}

export default connect(mapStateToProps, {
  requestLoginAct
})(LoginPage)