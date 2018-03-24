import React, { PureComponent } from 'react';
import Wrapper from './Wrapper';
import VideoFull from './Video';
import WhitePage from "./WhitePage";
import Nav from "./Nav";

class Header extends PureComponent {
  render() {
    return (
        <Wrapper>
          <Nav />
          <VideoFull />
          <WhitePage />
        </Wrapper>
    );
  }
}

export default Header;
