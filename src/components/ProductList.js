import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class ProductList extends Component {
  render() {
    const { products } = this.props;

    if (products === undefined) {
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
          <Product key={ obj.id } { ...obj } />
        ))}
      </section>
    );
  }
}
ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProductList;
