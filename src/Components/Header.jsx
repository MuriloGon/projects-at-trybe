import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header as MainHeader } from '../styles/menuWrapperStyles';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ name, search }) {
  const [handleSearch, sethandleSearch] = useState(false);

  const handleClick = () => {
    if (handleSearch === false) return sethandleSearch(true);
    if (handleSearch === true) return sethandleSearch(false);
  };

  return (
    <>
      <MainHeader>
        <Link to="/perfil">
          <img
            src={ profileIcon }
            alt="Profile Icon"
            data-testid="profile-top-btn"
          />
        </Link>
        <h1 data-testid="page-title">{name}</h1>
        {search && <input
          type="image"
          src={ searchIcon }
          alt="Search Icon"
          data-testid="search-top-btn"
          onClick={ () => handleClick() }
        />}
      </MainHeader>
      { handleSearch && <SearchBar /> }
    </>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};

export default Header;
