import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
          onClick={ () => handleClick() }
        />
      </div>
      <div>
        { handleSearch && <input
          type="text"
          data-testid="search-input"
        /> }
      </div>
    </>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
