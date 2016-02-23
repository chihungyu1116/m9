import React, { PropTypes } from 'react';

export default class List extends React.Component {
  static propTypes = {
    heads: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired
  };

  handleSubmit = () => {
    
  };

  renderHeads() {

  }

  renderRows() {
    
  }

  render() {
    if(this.props.rows.length === 0) {
      return (
        <div className='list-component'>
          <p>No Data Available</p>
        </div>
      )
    }

    return (
      <table className="list-component table table-striped">
        <thead className="thead-inverse">
          <tr>
            { this.renderHeads() }        
          </tr>
        </thead>
        <tbody>
          { this.renderBody() }
        </tbody>
      </table>
    );
  }
}