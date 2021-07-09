import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import useMenuType from '../../../hooks/useMenuType';
import MainScreen from '../../../Components/MainScreen';
import RecipeDetails from './RecipeDetails';

function devPlaceholder(type, path, info) {
  return (
    <div>
      <h2>
        {type.toUpperCase()}
      </h2>
      <h3>
        {path}
      </h3>
      {info && (
        <h3>
          {info}
        </h3>)}
    </div>
  );
}

function Menu() {
  const { path } = useRouteMatch();
  const menuType = useMenuType();
  return (
    <Switch>
      <Route exact path={ path }>
        <MainScreen type={ menuType } />
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
