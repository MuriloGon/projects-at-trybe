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

  updateQuantity = (identifier, quantity) => {
    const { cartItems } = this.state;
    const copy = [...cartItems];
    const index = copy.findIndex(({ id }) => id === identifier);
    copy[index].quantity = quantity;
    this.setState({ cartItems: copy });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home addToCart={ this.addToCart } />
          </Route>
          <Route path="/cart">
            <Cart
              cartItems={ cartItems }
              updateQuantity={ this.updateQuantity }
            />
          </Route>
          <Route
            render={ (routeProps) => (<ProductDetail
              { ...routeProps }
              addToCart={ this.addToCart }
            />) }
            path="/productdetail/:id"
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
