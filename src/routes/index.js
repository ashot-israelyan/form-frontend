import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './Home'),
  loading: () => null,
  modules: ['home'],
});

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);
