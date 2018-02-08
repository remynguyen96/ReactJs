import React from 'react';
import {render} from 'react-dom';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './utils/configureStore';
import App from './containers/App';

const history = createHistory();
const store = configureStore(history);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);

// if(module.hot) {
//     module.hot.accept('./containers/App', () => {
//         const NextApp = require('./containers/App').default;
//         render(<NextApp />, document.getElementById('app'));
//     });
// }
registerServiceWorker();

