import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from '../../Components/MainContainer';
import Menu from './Menu';
import Explore from './Explore';
import Perfil from './Perfil';
import MainContainer from '../../Components/MainContainer';

function Application() {
  return (
    <MainContainer>
      <Switch>
        <Route path={ ['/comidas', '/bebidas'] }>
          <Menu />
        </Route>

        <Route path="/explorar">
          <Explore />
        </Route>

        <Route path="/perfil">
          <Perfil />
        </Route>

        <Route path="/receitas-feitas">
          <h1>Receitas Feitas</h1>
        </Route>

        <Route path="/receitas-favoritas">
          <h1>Receitas Favoritadas</h1>
        </Route>
      </Switch>
    </MainContainer>
  );
}

export default Application;
