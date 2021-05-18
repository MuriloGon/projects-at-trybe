import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    const test = {
      pathname: `/productdetail/${id}`,
      state: { title, thumbnail, price },
    };

    return (
      <section data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
        <Link to={ test } data-testid="product-detail-link"> Mais Informações </Link>
      </section>
    );
  }
}
Product.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
export default Product;
