import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
// import Todo from './containers/Todo';
import registerServiceWorker from './registerServiceWorker';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// const routeContainer = (
//     <Router>
//         <Link to="/">App Container</Link>
//         <Link to="/todo">Todo Container</Link>
//         <Switch>
//             <Route path="/" component={App}></Route>
//             <Route path="/todo" component={Todo}></Route>
//         </Switch>
//     </Router>
// )
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
