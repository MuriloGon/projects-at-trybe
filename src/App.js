import React, { useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from './pages/Login';
// import Auth from './Components/Auth';
import loadReduxInitialState from './slices/loadReduxInitialState';
import Application from './pages/Application';
import useSetTitleWithRouteName from './hooks/useSetTitleWithRouteName';
import { loginUser, logoutUser } from './slices/auth';
import './App.css';

function renderLinksDev(logged, dispatch) {
  return (
    <div className="rotas">
      <Link to="/">/</Link>
      <Link to="/login">Login</Link>
      <Link to="/comidas">Comidas</Link>
      <Link to="/bebidas">Bebidas</Link>
      <Link to="/explorar">Explorar</Link>
      <Link to="/perfil">Perfil</Link>
      <Link to="/receitas-feitas">Receitas Feitas</Link>
      <Link to="/receitas-favoritas">Receitas Favoritadas</Link>
      <label htmlFor="checkbox-radio">
        Auth
        <input
          value={ logged }
          type="checkbox"
          id="checkbox-radio"
          onChange={ () => {
            if (logged) {
              dispatch(logoutUser());
            } else {
              dispatch(loginUser());
            }
          } }
        />
      </label>
    </div>
  );
}

const applicationRoutes = [
  '/comidas',
  '/bebidas',
  '/perfil',
  '/explorar',
  '/receitas-feitas',
  '/receitas-favoritas',
];

function App() {
  const dispatch = useDispatch();
  const logged = useSelector((st) => st.auth.logged);

  useSetTitleWithRouteName();

  useEffect(() => {
    dispatch(loadReduxInitialState());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {renderLinksDev(logged, dispatch)}
      <Switch>
        <Route exact path="/">
          {/* <Redirect to="/login" /> */}
          <Login />
        </Route>

        {/* <Route path="/login">
          <Auth auth={ logged } loggedPath="/comidas" />
          <Login />
        </Route> */}

        <Route path={ applicationRoutes }>
          {/* <Auth auth={ logged } notLoggedPath="/not-logged" /> */}
          <Application />
        </Route>

        <Route path="/404">
          <h1>Página não encontrada</h1>
        </Route>

        <Route path="/not-logged">
          <h1>Você precisa estar Logado</h1>
        </Route>

        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
