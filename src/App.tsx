import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import useScrollTop from './hooks/useScrollTop';
import {
  Home, Search, Cart, Checkout,
} from './pages';
import ProductDetails from './pages/ProductDetails';

function App(): JSX.Element {
  const stateRedux = useSelector((state) => state);
  useScrollTop();

  useEffect(() => {
    localStorage.setItem('previousState', JSON.stringify(stateRedux));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateRedux]);

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
