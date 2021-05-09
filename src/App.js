import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/NavBar';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <MovieList />
        </Route>

        <Route path="/movies/new">
          <NewMovie />
        </Route>

        <Route path="/movies/:id/edit">
          <EditMovie />
        </Route>

        <Route path="/movies/:id">
          <MovieDetails />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
