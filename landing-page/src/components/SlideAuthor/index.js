import React, { Component } from 'react';
import Wrapper from './Wrapper';
import VideoAuthor from "./VideoAuthor";
import { componentAuthor } from '../../utils/mockData';

class SlideAuthor extends Component {
  render() {
    const settings = {
      className: 'author-list',
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 2,
      speed: 1200,
      variableWidth: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
        <Wrapper id={componentAuthor}>
          <div className="author-barrier"></div>
          <div className="author">
            <h3 className="author-title">Meet Our Team</h3>
            <VideoAuthor settings={settings} width={350} height={350} />
          </div>
        </Wrapper>
    );
  }
}

export default SlideAuthor;
