import React, { FunctionComponent as FC } from 'react';
import { Link } from 'react-router-dom';
import {
  NavContainer, NavContent, NavList, NavItem,
} from './styles';

const Navbar: FC = () => (
  <NavContainer>
    <NavContent>
      <NavList>
        <Link to="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link to="/search">
          <NavItem>Search</NavItem>
        </Link>
        <Link to="/cart">
          <NavItem>Cart</NavItem>
        </Link>
      </NavList>
    </NavContent>
  </NavContainer>
);

export default Navbar;
