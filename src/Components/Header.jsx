import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ name }) {
  const [handleSearch, sethandleSearch] = useState(false);

  const handleClick = () => {
    if (handleSearch === false) return sethandleSearch(true);
    if (handleSearch === true) return sethandleSearch(false);
  };

  return (
    <>
      <div>
        <Link to="/perfil">
          <img
            src={ profileIcon }
            alt="Profile Icon"
            data-testid="profile-top-btn"
          />
          <h1 data-testid="page-title">{name}</h1>
        </Link>
        <input
          type="image"
          src={ searchIcon }
          alt="Search Icon"
          data-testid="search-top-btn"
          onClick={ () => handleClick() }
        />
      </div>
      <div>
        { handleSearch && <SearchBar /> }
      </div>
    </>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
