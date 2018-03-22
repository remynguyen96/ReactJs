import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Link from './Link';
import VideoFull from './VideoFull';
import WhitePage from "./WhitePage";
import logo from '../../images/netleaders-logo.png';

class Header extends Component {
  render() {
    return (
        <Wrapper className='header'>
          <div className='header-nav'>
            <div className='header-logo'>
              <img src={logo} alt="netleaders" className='header-logo-images' />
            </div>
            <ul className='header-menu'>
              <Link name='Headlines 1' active={true} />
              <Link name='Headlines 2' active={false} />
              <Link name='Headlines 3' active={false} />
              <Link name='Headlines 4' active={false} />
            </ul>
          </div>
          <div className="header-video">
            <VideoFull />
          </div>
          <div className="header-white-page">
            <WhitePage />
          </div>
        </Wrapper>
    );
  }
}

export default Header;
