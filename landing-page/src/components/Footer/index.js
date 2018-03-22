import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Map from "./Map";
import Contact from "./Contact";

class Footer extends Component {
  render() {
    return (
        <Wrapper>
          <h4>Footer</h4>
          <Map />
          <Contact />
        </Wrapper>
    );
  }
}

export default Footer;
