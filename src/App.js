import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  addCartItem = (obj) => { this.setState({ cartItems: [...cartItems, obj] }); };

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home addCart={ addCart } />
          </Route>
          <Route path="/cart">
            <Cart cartItems={ cartItems } />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
