import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Header from '../Header';
import Doing from '../Doing';
import SlideVideo from '../SlideVideo/index';
import SlideAuthor from '../SlideAuthor/index';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <Wrapper id="part1">
        <Header />
        <Doing />
        <SlideVideo />
        <SlideAuthor />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
