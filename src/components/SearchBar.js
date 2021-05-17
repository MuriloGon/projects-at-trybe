import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  render() {
    const { value, onChange, onSubmit } = this.props;
    return (
      <form onSubmit={ onSubmit }>
        <input
          data-testid="query-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />
        <button
          data-testid="query-button"
          type="submit"
        >
          Buscar
        </button>
        <button type="submit">
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            Carrinho de compras
          </Link>
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}.isRequired;

export default SearchBar;
