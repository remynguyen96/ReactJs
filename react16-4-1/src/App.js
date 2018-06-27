import React, { Component } from 'react';
import './App.css';
import { ContextApi } from './ContextApi';
import { ContextApiOld } from './ContextApiOld';
import { DerivedState } from './DerivedState';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ContextApi />
        <ContextApiOld />
        <DerivedState />
      </div>
    );
  }
}

export default App;
