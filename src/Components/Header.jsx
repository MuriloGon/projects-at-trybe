import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name, renderSearchButton }) => (
  <h1>
    {name}
    {' '}
    {renderSearchButton && <span>searchButton</span>}
  </h1>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  renderSearchButton: PropTypes.bool.isRequired,
};

export default Header;
