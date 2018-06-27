import React, { Component } from 'react';
import './App.css';
import { ContextApi } from './ContextApi';
import { ContextApiOld } from './ContextApiOld';
<<<<<<< HEAD:react16-4-1/src/App.js
=======
import { DerivedState } from './DerivedState';
>>>>>>> 63f9d92eade77e2647495705aa8b1338452263e2:react16-4-1/src/App.js

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ContextApi />
        <ContextApiOld />
<<<<<<< HEAD:react16-4-1/src/App.js
=======
        <DerivedState />
>>>>>>> 63f9d92eade77e2647495705aa8b1338452263e2:react16-4-1/src/App.js
      </div>
    );
  }
}

export default App;
