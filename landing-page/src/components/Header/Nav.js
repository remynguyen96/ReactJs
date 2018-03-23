import React, {Component} from 'react';
import logo from '../../images/netleaders-logo.png';
import Link from "./Link";

class Nav extends Component {
  render() {
    return (
        <div className='header-nav'>
          <div className='header-logo'>
            <a href="">
              <img src={logo} alt="netleaders" className='header-logo-images' />
            </a>
          </div>
          <ul className='header-menu'>
            <Link name='Headlines 1' link='headlines-1' active={true} />
            <Link name='Headlines 2' link='headlines-2' active={false} />
            <Link name='Headlines 3' link='headlines-3' active={false} />
            <Link name='Headlines 4' link='headlines-4' active={false} />
          </ul>
        </div>
    );
  }
}

export default Nav;
