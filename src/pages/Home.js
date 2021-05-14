import React, { Component } from 'react';
import Categories from '../components/Categories';

class Home extends Component {
  render() {
    return (
      <main>
        <form>
          <input type="text" />
        </form>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Categories />
      </main>
    );
  }
}

export default Home;
