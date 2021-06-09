import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './CartButton.css';

const CartButton = ({ itemsCount }) => (
  <div className="cart-button">
    <button type="submit">
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        Carrinho de compras
      </Link>
    </button>
    <span className="cart-count" data-testid="shopping-cart-size">{itemsCount}</span>
  </div>
);

CartButton.propTypes = {
  itemsCount: PropTypes.number.isRequired,
};

export default CartButton;
