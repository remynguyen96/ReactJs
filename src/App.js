import React, { Component } from 'react';
import logo from './logo.svg';
import Styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={Styles.App}>
        <header className={Styles.AppHeader}>
          <img src={logo} className={Styles.AppLogo} alt="logo" />
          <h1 className={Styles.AppTitle}>Welcome to React</h1>
        </header>
        <p className={Styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
