import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const {
      title,
      thumbnail, price, id, addToCart, available_quantity: aq, quantity } = this.props;
    return (
      <section data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => {
            if (quantity < aq || quantity === undefined) {
              addToCart({ id, title, thumbnail, price, available_quantity: aq });
            }
          } }
        >
          Adicionar ao carrinho
        </button>
        <Link
          to={ { pathname: `/productdetail/${id}`,
            state:
          { title, thumbnail, price, id, aq } } }
          data-testid="product-detail-link"
        >
          Mais Informações
        </Link>
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
  available_quantity: PropTypes.number.isRequired,
  quantity: PropTypes.number,
};

Product.defaultProps = {
  quantity: undefined,
};

export default Product;
