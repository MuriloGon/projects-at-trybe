import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './MenuList';

function Application() {
  return (
    <Switch>
      <Route path={ ['/comidas', '/bebidas'] }>
        <Menu />
      </Route>

      <Route path="/explorar">
        <h1>Explorar</h1>
      </Route>

      <Route path="/perfil">
        <h1>perfil</h1>
      </Route>

      <Route path="/receitas-feitas">
        <h1>Receitas Feitas</h1>
      </Route>

      <Route path="/receitas-favoritas">
        <h1>Receitas Favoritadas</h1>
      </Route>
    </Switch>
  );
}

export default Application;
