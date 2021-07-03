import React from 'react';
import { Switch, Redirect, Route, useRouteMatch } from 'react-router-dom';
import ExploreHome from './ExploreHome';

function Explore() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={ path }>
        <ExploreHome />
      </Route>
      <Route exact path={ [`${path}/comidas`, `${path}/bebidas`] }>
        <h1>explore/something</h1>
      </Route>
      <Route path={ `${path}/*` }>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}

export default Explore;
