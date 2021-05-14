import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <main>
        <form>
          <input type="text" />
          <button type="button">
            <Link
              to="/cart"
              data-testid="shopping-cart-button"
            >
              Carrinho de compras
            </Link>
          </button>
        </form>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </main>
    );
  }
}

export default Home;
