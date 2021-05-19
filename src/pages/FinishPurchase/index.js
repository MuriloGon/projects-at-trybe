import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReviewProducts from './ReviewProducts';
import PurchaseFrom from './PurchaseForm';

class FinishPurchase extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <h1>Finalizar Compra</h1>
        <ReviewProducts cartItems={ cartItems } />
        <PurchaseFrom />
      </div>
    );
  }
}

FinishPurchase.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FinishPurchase;
