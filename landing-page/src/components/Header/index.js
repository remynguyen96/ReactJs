import React, { PureComponent } from 'react';
import Wrapper from './Wrapper';
import VideoFull from './Video';
import WhitePage from "./WhitePage";
import Nav from "./Nav";

const listMenu = [
  { name: 'Headlines 1', link: '#part1', active: true },
  { name: 'Headlines 2', link: '#part2', active: false },
  { name: 'Headlines 3', link: '#part3', active: false },
  { name: 'Headlines 4', link: '#part4', active: false },
  { name: 'Headlines 5', link: '#part5', active: false },
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
