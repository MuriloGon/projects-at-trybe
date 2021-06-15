import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

const App = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>

    <Route exact path="/login">
      <h1>Login</h1>
    </Route>

    <Route exact path="/game">
      <h1>Game</h1>
    </Route>

    <Route exact path="/feedback">
      <h1>Feedback</h1>
    </Route>

    <Route exact path="/settings">
      <h1>Settings</h1>
    </Route>

    <Route exact path="/ranking">
      <h1>Ranking</h1>
    </Route>

    <Route exact path="*">
      <h1>Not Found</h1>
    </Route>
  </Switch>
);

export default App;
