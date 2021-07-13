import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Explore from './Explore';
import Perfil from './Perfil';
import Container from '../../Components/MainContainer';
import DoneRecipe from '../../Components/DoneRecipe';
import FavoriteRecipe from '../../Components/FavoriteRecipe';

function Application() {
  return (
    <Switch>
      <Route path={ ['/comidas', '/bebidas'] }>
        <Menu />
      </Route>

      <Route path="/explorar">
        <Explore />
      </Route>

      <Route path="/perfil">
        <Container name="Perfil" search>
          <Perfil />
        </Container>
      </Route>

      <Route path="/receitas-feitas">
        <Container name="Receitas Feitas" footer search>
          <DoneRecipe />
        </Container>
      </Route>

      <Route path="/receitas-favoritas">
        <Container name="Receitas Favoritas" footer search>
          <FavoriteRecipe />
        </Container>
      </Route>
    </Switch>
  );
}

export default Application;
