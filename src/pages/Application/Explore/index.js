import React, { useEffect } from 'react';
import { Switch, Redirect, Route, useRouteMatch, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ExploreHome from './ExploreHome';
import ExploreIngredients from './ExploreIngredients';
import ExploreOptions from './ExplorOptions';
import ExploreArea from './ExploreArea';
import Container from '../../../Components/MainContainer';
import { setCurrentNavigation } from '../../../slices/currentNavigation';

const menuType = (pathname) => (/comidas/i.test(pathname) ? 'meals' : 'drinks');

function Explore() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { path } = useRouteMatch();

  useEffect(() => { dispatch(setCurrentNavigation('explore')); }, []);

  const type = menuType(pathname);
  return (
    <Switch>
      <Route exact path={ path }>
        <Container name="Explorar" search>
          <ExploreHome />
        </Container>
      </Route>

      <Route
        exact
        path={ [`${path}/bebidas`, `${path}/comidas`] }
      >
        <Container
          name={ type === 'meals' ? 'Explorar Comidas' : 'Explorar Bebidas' }
          search
        >
          <ExploreOptions type={ type } />
        </Container>
      </Route>

      <Route
        exact
        path={ [`${path}/bebidas/ingredientes`, `${path}/comidas/ingredientes`] }
      >
        <Container
          name="Explorar Ingredientes"
          search
        >
          <ExploreIngredients type={ type } />
        </Container>
      </Route>

      <Route exact path={ `${path}/comidas/area` }>
        <Container
          name="Explorar Origem"
        >
          <ExploreArea />
        </Container>
      </Route>

      <Route
        path={ `${path}/*` }
        render={ () => <Redirect to="/404" /> }
      />
    </Switch>
  );
}

export default Explore;
