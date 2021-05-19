import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

const data = [
  {
    id: 'MLB1832642322',
    ratings: [{
      name: 'name1',
      email: 'email1',
      comment: 'comment1',
      stars: 1 }],
  },
  {
    id: 'MLB1358417492',
    ratings: [{
      name: 'name2',
      email: 'email1',
      comment: 'comment2',
      stars: 2 }],
  },
  {
    id: 'MLB1362946742',
    ratings: [{
      name: 'name3',
      email: 'email3',
      comment: 'comment3',
      stars: 3 }] },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      ratings: data,
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

  getRatingById = (propRoutes) => {
    const { match: { params: { id: routeId } } } = propRoutes;
    const { ratings } = this.state;
    const out = ratings.find(({ id }) => id === routeId);
    return out === undefined ? [] : out;
  }

  addRating = (productId, rating) => {
    const { ratings } = this.state;
    const condition1 = (item) => item.id === productId;
    const condition2 = (item) => item.id !== productId;
    const isStored = ratings.some(condition1);
    if (isStored) {
      const updatedRating = ratings.find(condition1);
      const leftRatings = ratings.filter(condition2);
      updatedRating.ratings.push(rating);
      const output = [...leftRatings, updatedRating];
      this.setState({ ratings: output });
    } else {
      this.setState((st) => (
        { ratings: [...st.ratings, { id: productId, ratings: [rating] }] }
      ));
    }
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
              rating={ this.getRatingById(routeProps) }
              addRating={ this.addRating }
            />) }
            path="/productdetail/:id"
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
