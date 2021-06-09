import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Cart.css';
import { Link } from 'react-router-dom';

const renderImage = (title, thumbnail) => (
  <div className="cart-image">
    <img alt={ title } src={ thumbnail } />
  </div>
);

const renderContent = (
  title, id, { quantity, available_quantity: aq }, updateQuantity,
) => (
  <div className="cart-content">
    <h3 data-testid="shopping-cart-product-name">{title}</h3>
    <p>
      ID:
      <span>{id}</span>
    </p>
    <p>
      Quantidade:
      <span data-testid="shopping-cart-product-quantity">{quantity}</span>
    </p>
    <button
      type="button"
      onClick={ () => {
        if (quantity < aq) {
          updateQuantity(id, quantity + 1);
        }
      } }
      data-testid="product-increase-quantity"
    >
      ➕
    </button>
    <button
      type="button"
      onClick={ () => {
        updateQuantity(id, (quantity === 1) ? quantity : quantity - 1);
      } }
      data-testid="product-decrease-quantity"
    >
      ➖
    </button>

  </div>
);
class Cart extends Component {
  render() {
    const { cartItems, updateQuantity } = this.props;

    if (cartItems.length === 0) {
      return (
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>);
    }
    return (
      <section className="cart">
        <Link to="/checkout" data-testid="checkout-products">
          <h1>Prosseguir com a compra</h1>
        </Link>
        <ul>
          { cartItems.map(
            ({ id, title, thumbnail, quantity, available_quantity: aq }) => (
              <li key={ id }>
                <div className="cart-item">
                  { renderImage(title, thumbnail) }
                  { renderContent(title, id, {
                    quantity, available_quantity: aq }, updateQuantity) }
                </div>
              </li>
            ),
          )}
        </ul>
      </section>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.objectOf({}),
  ),
}.isRequired;

export default Cart;
