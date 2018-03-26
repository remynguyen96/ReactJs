import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Video from "./Video";

class SlideVideo extends Component {
  render() {
    const settings = {
      className: 'yt-center',
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 850,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
    };
    return (
      <Wrapper id="part3">
        <div className="bg-barrier"></div>
        <div className="video-bg">
          <h3 className="video-title">Slide Video Youtube</h3>
          <Video settings={settings} width={450} height={450} />
        </div>
      </Wrapper>
    );
  }
}

export default SlideVideo;
