import React, { Component , PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Notification extends React.Component {
  static propTypes = {
    notifications: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
  }

  handleNotificationClick(index) {
    console.log(index);
  }

  render() {
    const { notifications } = this.props;

    return (
      <div className="notification-container">
      {
        notifications.map((notification, index) => {
          const { type, message } = notification;
          const className = `alert alert-${type}`;

          return (
            <div className={className} key={index}>
              { message }
              <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.handleNotificationClick.bind(index)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )
        })
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { notifications = [] } = state.notificationReducer;

  return {
    notifications
  }
}

export default connect(mapStateToProps)(Notification)