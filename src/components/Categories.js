import React, { Component } from 'react';
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
      this.setState({ categorias: data });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h3>Categorias:</h3>
        <ul>
          {categories.map((category) => (
            <li key={ category.id } data-testid="category">{ category.name}</li>)) }
        </ul>
      </div>
    );
  }
}

export default Categories;
