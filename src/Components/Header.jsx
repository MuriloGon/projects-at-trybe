import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoSearch } from 'react-icons/io5';

const Header = ({ name, renderSearchButton }) => (
  <div>
    <Link to="/perfil">
      <img
        src="src/images/profileIcon.svg"
        alt="Profile Icon"
        data-testid="profile-top-btn"
      />
      <h1 data-testid="page-title">{name}</h1>
    </Link>
    <input
      type="image"
      src="src/images/searchIcon.svg"
      alt="Search Icon"
      data-testid="search-top-btn"
    />
  </div>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};

export default Header;
