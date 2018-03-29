import React, { Component } from 'react';
import Header from './Header/index';
// import Doing from './Doing/index';
// import SlideVideo from './SlideVideo/index';
// import SlideAuthor from './SlideAuthor/index';
// import Footer from './Footer/index';
import { componentApp } from "../utils/mockData";

class App extends Component {
  render() {
    return (
      <div id={componentApp} >
        <Header />
        {/*<Doing />*/}
        {/*<SlideVideo />*/}
        {/*<SlideAuthor />*/}
        {/*<Footer />*/}
      </div>
    );
  }
}

export default App;
