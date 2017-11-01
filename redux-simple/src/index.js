import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import allReducers from './reducers';
import {BrowserRouter as Router} from 'react-router-dom'


const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
     </Provider>
    , document.getElementById('root'));
registerServiceWorker();



