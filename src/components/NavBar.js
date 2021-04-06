import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="mnav">
        <nav className="mnav__content">
          <ul>
            <Link to="/">MOVIE LIBRARY</Link>
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </ul>
        </nav>
      </div>

    );
  }
}

export default NavBar;
