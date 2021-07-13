/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentNavigation } from '../../../slices/currentNavigation';
import useMenuType from '../../../hooks/useMenuType';
import MainScreen from '../../../Components/MainScreen';
import RecipeDetails from './RecipeDetails';
import Container from '../../../Components/MainContainer';

function Menu() {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  const menuType = useMenuType();

  useEffect(() => { dispatch(setCurrentNavigation(menuType)); }, [menuType]);

  return (
    <Switch>
      <Route exact path={ path }>
        <Container name={ menuType === 'meals' ? 'Comidas' : 'Bebidas' }>
          <MainScreen type={ menuType } />
        </Container>
      </Route>

      <Route exact path={ `${path}/:id(\\d{1,})` }>
        {
          ({ match: { params: { id } } }) => <RecipeDetails type={ menuType } id={ id } />
        }
      </Route>

      <Route exact path={ `${path}/:id(\\d{1,})/in-progress` }>
        {
          ({ match: { params: { id } } }) => (
            <RecipeDetails
              type={ menuType }
              id={ id }
              inProgress
            />)
        }
      </Route>

      <Route path={ `${path}/*` }>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}

export default Menu;
