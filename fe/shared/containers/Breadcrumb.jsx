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
      if(route.path) {
        routes.push({
          path: route.path,
          name: route.name
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