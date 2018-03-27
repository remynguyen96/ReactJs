import React, { PureComponent } from 'react';
import Wrapper from './Wrapper';
import VideoFull from './Video';
import WhitePage from "./WhitePage";
import Nav from "./Nav";

const listMenu = [
  { name: 'Headlines 1' },
  { name: 'Headlines 2' },
  { name: 'Headlines 3' },
  { name: 'Headlines 4' },
  { name: 'Headlines 5' },
];
class Header extends PureComponent {
  render() {
    return (
        <Wrapper>
          <Nav listMenu={listMenu} />
          <VideoFull />
          <WhitePage />
        </Wrapper>
    );
  }
}

export default Header;
