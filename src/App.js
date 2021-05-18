import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  addToCart = (obj) => {
    const { cartItems } = this.state;
    if (cartItems.some(({ id }) => id === obj.id)) {
      const existingProduct = cartItems.find(({ id }) => id === obj.id);
      const filteredProducts = cartItems.filter(({ id }) => id !== obj.id);
      existingProduct.quantity += 1;
      this.setState({ cartItems: [...filteredProducts, existingProduct] });
    } else {
      this.setState((st) => ({ cartItems: [...st.cartItems, { ...obj, quantity: 1 }] }));
    }
  };

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home addToCart={ this.addToCart } />
          </Route>
          <Route path="/cart">
            <Cart cartItems={ cartItems } />
          </Route>
          <Route
            render={ (routeProps) => <ProductDetail { ...routeProps } /> }
            path="/productdetail/:id"
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
