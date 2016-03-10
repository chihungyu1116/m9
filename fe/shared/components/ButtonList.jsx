import React, { PropTypes } from 'react';
import moment from 'moment';

export default class ButtonList extends React.Component {
  static propTypes = {
    matchAttr: PropTypes.string.isRequired,
    selected: PropTypes.array.isRequired, 
    list: PropTypes.array.isRequired,
    handleButtonListChange: PropTypes.func.isRequired // return the selected items
  };

  constructor(props) {
    super(props);
    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  _handleButtonClick(event) {
    const value = event.target.textContent;
    const { list, selected, matchAttr, handleButtonListChange } = this.props
    let result = [];
    let found = false;

    // if item is selected then deselect it
    selected.forEach((selectedItem) => {
      if(selectedItem[matchAttr] === value) {
        found = true;
      } else {
        result.push(selectedItem);
      }
    });

    // if item is not selected then select it
    if(!found) {
      list.forEach((item) => {
        if(item[matchAttr] === value) {
          result.push(item);  
        }
      });
    }

    handleButtonListChange(result);
  }

  render() {
    const { list, selected, matchAttr } = this.props;
    let result = [];

    list.forEach((item) => {
      let found = false;

      selected.forEach((selectedItem) => {
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
                onClick={ this._handleButtonClick }>
                { item[matchAttr] }
              </button>
            )
          })
        }
      </div>
    )

  }
}