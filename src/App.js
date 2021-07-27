import React, { useEffect } from 'react';
import { Switch, Route, Redirect /* Link */ } from 'react-router-dom';
import { useDispatch /* useSelector */ } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import Login from './pages/Login';
// import Auth from './Components/Auth';
import loadReduxInitialState from './slices/loadReduxInitialState';
import Application from './pages/Application';
// import useSetTitleWithRouteName from './hooks/useSetTitleWithRouteName';
// import { loginUser, logoutUser } from './slices/auth';
import './App.css';

const applicationRoutes = [
  '/comidas',
  '/bebidas',
  '/perfil',
  '/explorar',
  '/receitas-feitas',
  '/receitas-favoritas',
];

const alertOptions = {
  anchorOrigin: { vertical: 'top', horizontal: 'center' },
  autoHideDuration: 1500,
  transitionDuration: { appear: 100, enter: 100, exit: 100 },
};

function App() {
  const dispatch = useDispatch();
  // const logged = useSelector((st) => st.auth.logged);

  useEffect(() => {
    dispatch(loadReduxInitialState());
    window.title = 'Try Be Delicious';
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
        <SnackbarProvider { ...alertOptions }>
          <Application />
        </SnackbarProvider>
      </Route>

      <Route path="/404">
        <h1>Not Found</h1>
      </Route>

      <Route path="/not-logged">
        <h1>Você precisa estar Logado</h1>
      </Route>

      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}

export default App;
