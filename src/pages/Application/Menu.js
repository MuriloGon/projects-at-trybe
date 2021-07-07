import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import useMenuType from '../../hooks/useMenuType';
import MainScreen from '../../Components/MainScreen';

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
  const { path, url } = useRouteMatch();
  const menuType = useMenuType();
  return (
    <Switch>
      <Route exact path={ path }>
        <MainScreen type={ menuType } />
      </Route>

      <Route exact path={ `${path}/:id(\\d{1,})` }>
        {devPlaceholder(menuType, url, 'Com o id')}
      </Route>

      <Route path={ `${path}/:id(\\d{1,})/in-progress` }>
        {devPlaceholder(menuType, url, 'Com o id - Em progresso')}
      </Route>

      <Route path={ `${path}/*` }>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}

export default Menu;
