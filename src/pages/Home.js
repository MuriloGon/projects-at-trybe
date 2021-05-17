import React, { Component } from 'react';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import { getProductsFromCategoryAndQuery } from '../services/api';

import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      filters: '',
      searchValue: '',
      data: {},
    };
  }

  handleSearch = ({ target: { value } }) => {
    this.setState({ searchValue: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchValue, filters } = this.state;
    const data = await getProductsFromCategoryAndQuery(filters, searchValue);
    this.setState({ data });
  };

  handleCategory = (category) => {
    this.setState({ filters: category });
  }

  render() {
    const { searchValue, data: { results } } = this.state;
    return (
      <main className="main-content">
        <div className="sidebar">
          <Categories setCategory={ this.handleCategory } />
        </div>
        <div className="content">
          <SearchBar
            value={ searchValue }
            onChange={ this.handleSearch }
            onSubmit={ this.handleSubmit }
          />

          <ProductList products={ results } />
        </div>
      </main>
    );
  }
}

export default Home;
