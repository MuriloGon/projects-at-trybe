import React from 'react';
import PropTypes from 'prop-types';
import { IoSearch } from 'react-icons/io5';

const Header = ({ name, search }) => (
  <h1>
    {name}
    {' '}
    {search && <IoSearch />}
  </h1>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};

export default Header;
