import React, {Component} from 'react';

class Link extends Component {
  render() {
    const { name, link, active, handleClick } = this.props;
    return (
        <li className={`header-menu-items ${active ? 'active' : ''}`}>
          <a href={link} className='header-menu-item' onClick={handleClick}>
            {name}
          </a>
        </li>
    );
  }
}

export default Link;
