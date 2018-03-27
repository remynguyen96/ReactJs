import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Video from "./Video";
import { componentVideo } from '../../utils/mockData';

class SlideVideo extends Component {
  render() {
    const settings = {
      className: 'yt-center',
      centerMode: true,
      infinite: true,
      lazyLoad: true,
      slidesToScroll: 3,
      slidesToShow: 3,
      speed: 900,
      variableWidth: true,
      responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          centerPadding: '75px',
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0',
          arrows: false,
        }
      }
    ]
    };
    return (
      <Wrapper id={componentVideo}>
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
