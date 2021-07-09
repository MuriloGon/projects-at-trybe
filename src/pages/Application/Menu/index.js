import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import useMenuType from '../../../hooks/useMenuType';
import MainScreen from '../../../Components/MainScreen';
import RecipeDetails from './RecipeDetails';
import Container from '../../../Components/MainContainer';

function Menu() {
  const { path } = useRouteMatch();
  const menuType = useMenuType();
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
