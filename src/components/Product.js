import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <section data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
      </section>
    );
  }
}
Product.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default Product;
