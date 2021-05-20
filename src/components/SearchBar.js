import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from './CartButton';

class SearchBar extends Component {
  render() {
    const { value, onChange, onSubmit, itemsCount } = this.props;
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
        <CartButton itemsCount={ itemsCount } />
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
