import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
// import Todo from './containers/Todo';
import registerServiceWorker from './registerServiceWorker';
// import {BrowserRouter as ExambleRouter, Route, Link, Switch} from 'react-router-dom';
// const routeContainer = (
//     <ExambleRouter>
//         <Link to="/">App Container</Link>
//         <Link to="/todo">Todo Container</Link>
//         <Switch>
//             <Route path="/" component={App}></Route>
//             <Route path="/todo" component={Todo}></Route>
//         </Switch>
//     </ExambleRouter>
// )
ReactDOM.render(<App />, document.getElementById('root'));
if (module.hot) {
    module.hot.accept('./containers/App/App', () => {
       const NextApp = require('./containers/App/App').default;
       ReactDOM.render(<App />, document.getElementById('root'))
    });
}
registerServiceWorker();
