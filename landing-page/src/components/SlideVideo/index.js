import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Video from "./Video";

class SlideVideo extends Component {
  render() {
    return (
      <Wrapper>
        <h4>SlideVideo</h4>
        <Video />
      </Wrapper>
    );
  }
}

export default SlideVideo;
