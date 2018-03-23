import React, {Component} from 'react';

class Link extends Component {
  render() {
    const { name, link, active } = this.props;
    return (
        <li className={`header-menu-items ${active ? 'active' : ''}`}>
          <a href={link} className='header-menu-item'>
            {name}
          </a>
        </li>
    );
  }
}

export default Link;
