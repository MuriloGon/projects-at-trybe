import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Login from './pages/Login';
import themes from './styles';
import Timer from './pages/Login/Game/Timer';

const App = () => (
  <ThemeProvider theme={ themes.light }>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/game">
        <h1>Game</h1>
        <Timer time={ 50 } />
      </Route>

      <Route exact path="/feedback">
        <h1>Feedback</h1>
      </Route>

      <Route exact path="/settings">
        <h1 data-testid="settings-title">Settings</h1>
      </Route>

      <Route exact path="/ranking">
        <h1>Ranking</h1>
      </Route>

      <Route exact path="*">
        <h1>Not Found</h1>
      </Route>
    </Switch>
  </ThemeProvider>
);

export default App;
