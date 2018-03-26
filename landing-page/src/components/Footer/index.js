import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Map from "./Map";
import Contact from "./Contact";

class Footer extends Component {
  render() {
    const position = { lat: 10.8113567, lng: 106.6720422 };
    const name = 'NetLeaders';
    return (
        <Wrapper id="part5">
          <h3 className="footer-title">
            Seventy Financial Planning can help clients anywhere in the UK, however our main geographical areas are Harrogate, Leeds, York and anywhere throughout
            North Yorkshire.
          </h3>
          <Contact />
          <div className="footer-map">
            <section className="footer-contact">
              <div className="contact-desc">
                <i className="fa fa-map-marker contact-icon" aria-hidden="true"></i>
                <span className="contact-info">Seventy Financial Planning
                The Apple Store, Haggs Farm,
                Haggs Road, Follifoot, Harrogate,
                HG3 1EQ</span>
              </div>
              <div className="contact-desc">
                <i className="fa fa-phone contact-icon" aria-hidden="true"></i>
                <span className="contact-info">01423 611004</span>
              </div>
              <div className="contact-desc">
                <i className="fa fa-envelope contact-icon" aria-hidden="true"></i>
                <span className="contact-info">enquiries@seventyfinancialplanning.com</span>
              </div>
            </section>
            <Map name={name} center={position} zoom={16} />
          </div>
          <div className="copyright">Copyright © 2018, All rights reserved</div>
        </Wrapper>
    );
  }
}

export default Footer;
