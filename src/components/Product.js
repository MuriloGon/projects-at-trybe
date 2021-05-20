import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { title, thumbnail, price, id, addToCart } = this.props;
    return (
      <section data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => { addToCart({ id, title, thumbnail, price }); } }
        >
          Adicionar ao carrinho
        </button>
        <Link
          to={ { pathname: `/productdetail/${id}`,
            state:
          { title, thumbnail, price, id } } }
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
};
export default Product;
