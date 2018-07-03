import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { NavMenu } from "./index";
import './Nav.css';

interface NavProps {
  listMenu: NavMenu[];
}

interface NavState {
  current: string;
}

class Nav extends React.PureComponent<NavProps, NavState> {

  state: NavState = {
    current: 'mail',
  };

  handleClick = (e: any) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { current } = this.state;
    const { listMenu } = this.props;
    return (
      <Menu onClick={this.handleClick} theme="dark" selectedKeys={[current]} mode="inline">
        {listMenu.map(({ icon, name, link }) => (
          <Menu.Item key={icon}>
            <Link to={link}>
              <Icon type={icon} />{name}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default Nav;
