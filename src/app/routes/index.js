import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ "./homepage"),
  loading: () => null,
  modules: ["homepage"]
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
  </Switch>
);
