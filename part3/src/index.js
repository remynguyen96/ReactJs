import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// import App from './containers/App';
// import { store } from './containers/App/store';

import App2 from './containers/App2';
import { store } from './containers/App2/store';

ReactDOM.render(
    <Provider store={store}>
        <App2 />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
