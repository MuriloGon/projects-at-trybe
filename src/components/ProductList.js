import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class ProductList extends Component {
  render() {
    const { products, addToCart } = this.props;

    if (products === null) {
      return (
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      );
    }
    if (products.length === 0) return <h1>Nenhum produto foi encontrado.</h1>;

    return (
      <section>
        {products.map((obj) => (
          <Product
            key={ obj.id }
            { ...obj }
            addToCart={ addToCart }
          />
        ))}
      </section>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
  addToCart: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  products: null,
};

export default ProductList;
