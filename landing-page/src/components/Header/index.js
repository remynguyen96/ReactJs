import React, { PureComponent } from 'react';
import Wrapper from './Wrapper';
import VideoFull from './VideoFull';
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
