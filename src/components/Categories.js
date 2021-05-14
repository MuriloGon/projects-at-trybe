import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categorias: [],

    };
  }

  componentDidMount() {
    getCategories().then((data) => {
      this.setState({ categorias: data });
    });
  }

  render() {
    const { categorias } = this.state;
    return (
      <div>
        <h3>Categorias:</h3>
        <ul>
          {categorias.map((categoria) => (
            <li key={ categoria.id } data-testid="category">{ categoria.name}</li>)) }
        </ul>
      </div>
    );
  }
}

export default Categories;
