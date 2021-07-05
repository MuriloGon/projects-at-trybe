import React from 'react';
import { Switch, Redirect, Route, useRouteMatch, useLocation } from 'react-router-dom';
import ExploreHome from './ExploreHome';
import ExploreIngredients from './ExploreIngredients';
import ExploreOptions from './ExplorOptions';
import ExploreArea from './ExploreArea';

const menuType = (pathname) => (/comidas/i.test(pathname) ? 'meals' : 'drinks');

function Explore() {
  const { pathname } = useLocation();
  const { path } = useRouteMatch();

  const type = menuType(pathname);
  return (
    <Switch>
      <Route exact path={ path } component={ ExploreHome } />

      <Route
        exact
        path={ [`${path}/bebidas`, `${path}/comidas`] }
      >
        <ExploreOptions type={ type } />
      </Route>

      <Route
        exact
        path={ [`${path}/bebidas/ingredientes`, `${path}/comidas/ingredientes`] }
      >
        <ExploreIngredients type={ type } />
      </Route>

      <Route exact path={ `${path}/comidas/area` } component={ ExploreArea } />

      <Route
        path={ `${path}/*` }
        render={ () => <Redirect to="/404" /> }
      />
    </Switch>
  );
}

export default Explore;
