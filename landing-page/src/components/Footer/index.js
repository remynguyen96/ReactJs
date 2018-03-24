import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Map from "./Map";
import Contact from "./Contact";

class Footer extends Component {
  render() {
    return (
        <Wrapper>
          <h3 className="footer-title">
            Seventy Financial Planning can help clients anywhere in the UK, however our main geographical areas are Harrogate, Leeds, York and anywhere throughout
            North Yorkshire.
          </h3>
          <Contact />
          <Map />
        </Wrapper>
    );
  }
}

export default Footer;
