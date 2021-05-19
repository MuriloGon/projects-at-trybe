import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from '../components/Rating';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchProductById();
  }

  fetchProductById = async () => {
    const { match: { params: { id } } } = this.props;
    const api = `https://api.mercadolibre.com/items/${id}`;
    const result = await fetch(api);
    const data = await result.json();
    this.setState({
      product: data,
      loading: false,
    });
  }

  render() {
    const { loading, product: { title, thumbnail, price, id } } = this.state;
    const { addToCart, rating = [], addRating } = this.props;

    if (loading) return <h1>Loading...</h1>;
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
          <button type="button">
            <Link
              to="/cart"
              data-testid="shopping-cart-button"
            >
              Carrinho de compras
            </Link>
          </button>
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
  addRating: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  rating: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductDetail;
