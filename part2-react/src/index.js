import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './utils/configureStore';
import App from './containers/App';

const store = configureStore();
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

if(module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        render(<NextApp />, document.getElementById('app'));
    });
}
registerServiceWorker();

