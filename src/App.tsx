import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import {
  Home, Search, Cart, Checkout,
} from './pages';

function App(): JSX.Element {
  return (
    <>
      <Navbar routes={['/', '/search', '/cart', '/checkout']} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </>
  );
}

export default App;
