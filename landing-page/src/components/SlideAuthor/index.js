import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Wrapper from './Wrapper';
import VideoAuthor from "./VideoAuthor";
import { componentAuthor } from '../../utils/mockData';

class SlideAuthor extends Component {
  render() {
    const settings = {
      className: 'author-list',
      initialSlide: 0,
      infinite: true,
      lazyLoad: true,
      slidesToScroll: 1,
      slidesToShow: 2,
      speed: 1200,
      autoplay: true,
      autoplaySpeed: 4800,
      cssEase: 'linear',
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
      ]
    };
    return (
        <Wrapper id={componentAuthor}>
          <div className="author-barrier"></div>
          <div className="author">
            <Zoom bottom cascade>
              <h3 className="author-title">Meet Our Team</h3>
            </Zoom>
            <VideoAuthor settings={settings} width={350} height={350} />
          </div>
        </Wrapper>
    );
  }
}

export default SlideAuthor;
