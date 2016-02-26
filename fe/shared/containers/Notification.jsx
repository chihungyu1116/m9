import React, { Component , PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { requestNotificationClose } from '../actions/Notification';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
  }

  handleNotificationClose(index) {
    this.props.requestNotificationClose({ index });
  }

  render() {
    const { notification } = this.props;
    let content = null;

    if(notification) {
      const { type, message } = notification;
      const className = `alert alert-${type}`;

      content = (
        <div className={ className }>
          { message }
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={ this.handleNotificationClose }>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )
    }

    return (
      <div className="notification-container">
        <ReactCSSTransitionGroup transitionName="notification" transitionEnterTimeout={ 250 } transitionLeaveTimeout={ 250 }>
        { content }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { notification } = state.notificationReducer;

  return {
    notification
  }
}

export default connect(mapStateToProps, {
  requestNotificationClose  
})(Notification)