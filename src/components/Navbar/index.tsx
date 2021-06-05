import React, { FunctionComponent as FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoCartOutline } from 'react-icons/io5';
import {
  NavContainer, NavContent, NavList, NavItem,
} from './styles';
import { RootState } from '../../store';

const Navbar: FC = () => {
  const totalQuantity = useSelector((state: RootState) => state.cart.items)
    .reduce((acc, { quantity }) => acc + quantity, 0);

  return (
    <NavContainer>
      <NavContent>
        <NavList>
          <Link to="/">
            <NavItem>Home</NavItem>
          </Link>
          <Link to="/search">
            <NavItem>Search</NavItem>
          </Link>
          <Link to="/cart" className="cart-items-link">
            <IoCartOutline />
            <NavItem>Cart</NavItem>
            <span className="qty-indicator">{totalQuantity}</span>
          </Link>
        </NavList>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
