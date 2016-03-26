import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class NavList extends React.Component {
  static propTypes = {
    list: PropTypes.array,
    activeIndex: PropTypes.number,
    handleClick: PropTypes.func
  };

  render() {
    const { list, activeIndex, handleClick } = this.props;

    return (
      <ul className='nav-list'>
        {
          list.map((item, index) => {
            const className = index == activeIndex ? 'active' : '';

            return (
              <li key={ index }>
                <Link className={ className } onClick={ event => handleClick(index) } to={ item.navTo }>{ item.name }</Link>
              </li>
            )
          })
        }
      </ul>
    );
  }
}