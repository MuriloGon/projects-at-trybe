import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import ToggleTheme from './ToggleTheme';

const Nav = styled.nav`background-color: ${({ primary }) => primary};
  color: ${({ secondary }) => secondary};
  display: flex;
  height: 50px;
  width: 100%;
`;

Nav.Content = styled.ul`align-items: stretch;
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0;

  & > * {
    user-select: none;
  }

  li {
    align-items: stretch;
    display: flex;
    justify-content: center;
    list-style: none;
  }

  a {
    align-items: center;
    display: flex;
    font-weight: 500;
    padding-inline: 1.5rem;
    transition: color linear 0.15s;
  }

  a:link, a:visited {
    color: ${({ secondary }) => secondary};
    text-decoration: none;
  }

  a:hover {
    color: ${({ accent }) => accent};
  }
`;

const Navbar = ({ toggleTheme, theme: currentTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <Nav { ...theme }>
      <Nav.Content { ...theme }>
        <li><Link to="/">MOVIE CARDS LIBRARY</Link></li>
        <li><Link to="/movies/new">ADICIONAR CARTÃO</Link></li>
        <li>
          <ToggleTheme currentTheme={ currentTheme } onClick={ toggleTheme } />
        </li>
      </Nav.Content>
    </Nav>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Navbar;
