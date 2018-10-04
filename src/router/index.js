import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from "../product-basic/NotFound";

const Loading = () => <div>Loading ...</div>;

const Home = Loadable({
  loader: () => import('../product-basic/App'),
  loading: Loading,
});

// const NotFound = Loadable({
//   loader: () => import('../product-basic/NotFound'),
//   loading: Loading,
// });

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exac path='/' component={Home} />
      {/*<Route component={NotFound} />*/}
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default AppRouter;