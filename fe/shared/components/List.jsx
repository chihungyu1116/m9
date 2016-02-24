import React, { PropTypes } from 'react';
import moment from 'moment';

export default class List extends React.Component {
  static propTypes = {
    fields: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  handleRowClick(cols) {
    this.props.handleRowClick(cols);
  }


  render() {
    const { fields = [], rows = [], handleRowClick = () => {} } = this.props;

    if(rows.length === 0) {
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
            {
              fields.map((field, index) => {
                return <th key={ index }>{ field.label }</th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, index) => {
              const cols = fields.map((field, index) => {
                let val = row[field.name];

                if(field.type === 'time') {
                  val = moment(val).format('lll');
                }

                return <td key={ index }>{ val }</td>;
              });

              return (
                <tr onClick={ this.handleRowClick.bind(this, row) } key={ index }>
                  { cols }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    );
  }
}