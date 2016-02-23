import React, { Component , PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const STYLES = {
  breadcrumb: {
    marginBottom: '5px'
  }
}

class Breadcrumb extends React.Component {
  render() {
    let routes = []

    this.props.routes.slice(1).forEach((route) => {
      // Currently not including the name of those IndexRoutes
      // As they are wrapped in the component and it's a bit complicated to extract it quickly
      if(route.breadcrumb) {
        routes.push({
          path: route.path,
          name: route.breadcrumb
        });  
      }
    });

    return (
      <ol className="breadcrumb" style={STYLES.breadcrumb}>
        {
          routes.map((route, index) => {
            return (index === routes.length - 1) ? 
              <li key={index} className='active'>{ route.name }</li> :
              <li key={index}><Link to={ route.path }>{ route.name }</Link></li>
          })
        }
      </ol>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Breadcrumb)