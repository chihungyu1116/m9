import React, { PropTypes } from 'react';
import moment from 'moment';

export default class ButtonList extends React.Component {
  static propTypes = {
    matchAttr: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
  };

  _handleButtonClick(event) {
    const { list, matchAttr, value = [], handleButtonListChange, onChange } = this.props

    let result = [];
    let found = false;

    // If item is selected then deselect it
    value.forEach((selectedItem) => {
      if(selectedItem[matchAttr] === event.target.textContent) {
        found = true;
      } else {
        result.push(selectedItem);
      }
    });

    // If item is not selected then select it
    if(!found) {
      list.forEach((item) => {
        if(item[matchAttr] === event.target.textContent) {
          result.push(item);  
        }
      });
    }

    return result;
  }

  render() {
    const { list, value = [], matchAttr, onChange } = this.props;
    let result = [];

    list.forEach((item) => {
      let found = false;

      value.forEach((selectedItem) => {
        if(selectedItem[matchAttr] === item[matchAttr]) {
          found = true;
        }
      });
      
      result.push({
        [matchAttr]: item[matchAttr],
        checked: found
      });
    });

    return (
      <div className='button-list-component'>
        {
          result.map((item, index) => {
            return (
              <button
                type='button'
                className={ 'btn btn-sm ' + (item.checked ? 'btn-info' : 'btn-secondary') }
                key={ index }
                onClick={ event => onChange(this._handleButtonClick(event)) }>
                { item[matchAttr] }
              </button>
            )
          })
        }
      </div>
    )

  }
}