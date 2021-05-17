import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((data) => {
      this.setState({ categories: data });
    });
  }

  render() {
    const { categories } = this.state;
    const { setCategory } = this.props;
    return (
      <div>
        <h3>Categorias:</h3>
        <ul>
          {categories.map(({ id, name }) => (
            <li key={ id } data-testid="category">
              <label htmlFor={ id }>
                <input
                  id={ id }
                  name="category"
                  value={ id }
                  type="radio"
                  onClick={ ({ target: { value } }) => setCategory(value) }
                />
                { name }
              </label>
            </li>)) }
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  setCategory: PropTypes.func,
}.isRequired;

export default Categories;
