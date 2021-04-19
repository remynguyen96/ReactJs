import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
// import App from './App';

// import Count from './Count';

import { GrudgesProvider } from './ApplicationGrudges/GrudesContext';
import ApplicationGrudges from './ApplicationGrudges';

// import ApplicationStartWars from './ApplicationStartWars';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Count max={15} step={5} /> */}

    <GrudgesProvider>
      <ApplicationGrudges />
    </GrudgesProvider>

    {/* <Router>
      <ApplicationStartWars />
    </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
