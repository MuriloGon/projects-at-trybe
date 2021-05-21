import React, { FunctionComponent as FC } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

interface NavbarProps {
  routes: Array<string>;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { routes } = props;
  return (
    <ul>
      {routes.map((str) => <li key={str}><Link to={str}>{str}</Link></li>)}
    </ul>
  );
};

Navbar.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Navbar;
