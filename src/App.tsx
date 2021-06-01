import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import useScrollTop from './hooks/useScrollTop';
import {
  Home, Search, Cart, Checkout,
} from './pages';
import ProductDetails from './pages/ProductDetails';

function App(): JSX.Element {
  useScrollTop();

  return (
    <>
      <Navbar />
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
        <Route exact path="/:id-:productName">
          <ProductDetails />
        </Route>
      </Switch>
    </>
  );
}

export default App;
