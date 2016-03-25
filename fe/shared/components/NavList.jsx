import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class NavList extends React.Component {
  static propTypes = {
    list: PropTypes.array,
    activeIndex: PropTypes.number
  };

  constructor(props) {
    super(props);
    const activeIndex = props.activeIndex || 0;

    this.state = {
      activeIndex
    };
  }

  _handleClick(index) {
    this.setState({
      activeIndex: index
    });
  }

  render() {
    const { list } = this.props;

    return (
      <ul className='nav-list'>
        {
          list.map((item, index) => {
            const className = index == this.state.activeIndex ? 'active' : '';

            return (
              <li key={ index }>
                <Link className={ className } onClick={ this._handleClick.bind(this, index) } to={ item.navTo }>{ item.name }</Link>
              </li>
            )
          })
        }
      </ul>
    );
  }
}