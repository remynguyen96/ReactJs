import React, {Component} from 'react';

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { activeMenu, link } = nextProps;
    if (activeMenu === link) {
      this.setState({ activeMenu: true });
    } else {
      this.setState({ activeMenu: false });
    };
  }

  render() {
    const { name, link, handleClick } = this.props;
    const { activeMenu } = this.state;
    return (
        <li className={`header-menu-items ${activeMenu ? 'active' : ''}`}>
          <a href={`#${link}`} className='header-menu-item' onClick={handleClick}>
            {name}
          </a>
        </li>
    );
  }
}

export default Link;
