import React, { Component , PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { requestLoginAct } from '../actions/Session';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
  static propTypes = {
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired 
  }

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(a,b,c) {
    console.log('submit: ',a,b,c)
    this.props.dispatch(requestLoginAct())
  }

  render() {
    return (
      <div id="login-page">
        <LoginForm onSubmit={this._handleSubmit}/>
        <p>
          <Link to="signup">Sign Up</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(LoginPage)