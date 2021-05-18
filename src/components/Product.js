import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { title, thumbnail, price, addToCart, id } = this.props;

    return (
      <section data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
        <button
          type="button"
          onClick={ () => { addToCart({ id, title, thumbnail, priceP }); } }
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}
Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};
export default Product;
