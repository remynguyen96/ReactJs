import React, { Component } from 'react';
import Wrapper from './Wrapper';
import VideoAuthor from "./VideoAuthor";

class SlideAuthor extends Component {
  render() {
    return (
        <Wrapper>
          <h4>SlideAuthor</h4>
          <VideoAuthor />
        </Wrapper>
    );
  }
}

export default SlideAuthor;
