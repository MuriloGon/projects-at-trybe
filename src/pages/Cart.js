import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: '',
    };
  }

  render() {
    const { cart } = this.state;
    const cartContent = (cart.length === 0)
      ? <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      : cart;
    return (
      <section>
        { cartContent }
      </section>
    );
  }
}

export default Cart;
