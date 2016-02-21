import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export default class Controls extends React.Component {
  static propTypes = {

  };

  renderUpdateProduction() {
    const { enableUpdateProduction } = this.props;

    if(!enableUpdateProduction) {
      return null;
    }

    return (
      <li className='nav-item'>
        <button className='btn btn-danger' type='button'>Update Production</button>
      </li>
    );
  }

  renderUpdatePreview() {
    const { enableUpdatePreview } = this.props;

    if(!enableUpdatePreview) {
      return null;
    }

    return (
      <li className='nav-item'>
        <button className='btn btn-warning' type='button'>Update Preview</button>
      </li>
    );
  }

  renderCreate() {
    const { enableCreate } = this.props    

    if(!enableCreate) {
      return null;
    }

    return (
      <li className='nav-item'>
        <button className='btn btn-info' type='button'>Create</button>
      </li>
    );
  }

  render() {
    return (
      <div className='clearfix'>
        <ul className='nav nav-pills pull-left'>
          { this.renderCreate() }
        </ul>
        <ul className='nav nav-pills pull-right'>
          { this.renderUpdatePreview() }
          { this.renderUpdateProduction() }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Controls)