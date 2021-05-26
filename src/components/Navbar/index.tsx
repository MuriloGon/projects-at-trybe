import React, { FunctionComponent as FC } from 'react';
import { Link } from 'react-router-dom';
import {
  NavContainer, NavContent, NavList, NavItem,
} from './styles';
import SearchForm from './SearchForm';

const Navbar: FC = () => (
  <NavContainer>
    <NavContent>
      <NavList>
        <Link to="/">
          <NavItem>Home</NavItem>
        </Link>
        <NavItem id="search-item">
          <SearchForm />
        </NavItem>
        <Link to="/cart">
          <NavItem>Cart</NavItem>
        </Link>
      </NavList>
    </NavContent>
  </NavContainer>
);

export default Navbar;
