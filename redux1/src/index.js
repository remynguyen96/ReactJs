import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import store, { history } from './store';

const router = (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={App}></Route>
        </Switch>
      </Router>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
