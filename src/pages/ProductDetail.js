import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from '../components/Rating';
import CartButton from '../components/CartButton';

class ProductDetail extends Component {
  render() {
    const { addToCart, rating = [], addRating, itemsCount } = this.props;
    const { location: { state: { title, thumbnail, price, id } } } = this.props;
    return (
      <section>
        <div>
          <h3 data-testid="product-detail-name">{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <span>{ price }</span>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => { addToCart({ id, title, thumbnail, price }); } }
          >
            Adicionar ao carrinho
          </button>
          <CartButton itemsCount={ itemsCount } />
        </div>
        <div>
          <Rating rating={ rating } addRating={ addRating } id={ id } />
        </div>
      </section>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  addRating: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  rating: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemsCount: PropTypes.number.isRequired,
};

export default ProductDetail;
