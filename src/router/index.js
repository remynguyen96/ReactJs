import React, { Fragment } from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from "./Navigation";
import { Spinner } from "./Spinner";

const menu = [
  { link: '/', name: 'Homepage' },
  { link: '/hocs', name: 'Hocs' },
  { link: '/context', name: 'Context' },
  { link: '/not-found-page', name: 'NotFound' },
];

const HomeComponent = Loadable({
  loader: () => import('../product-basic/App'),
  loading: Spinner,
});

const HocsComponent = Loadable({
  loader: () => import('../hocs'),
  loading: Spinner,
});

const ContextApi = Loadable({
  loader: () => import('../Context'),
  loading: Spinner,
});

const NotFoundComponent = Loadable({
  loader: () => import('../NotFound'),
  loading: Spinner,
});

const AppRouter = () => (
  <Router>
    <Fragment>
      <Navigation menu={menu} />
      <Switch>
        <Route exact path='/' component={HomeComponent} />
        <Route exact path='/hocs' component={HocsComponent} />
        <Route exact path='/context' component={ContextApi} />
        <Route component={NotFoundComponent} />
      </Switch>
    </Fragment>
  </Router>
);
export default AppRouter;