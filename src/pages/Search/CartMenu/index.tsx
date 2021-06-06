import React, { FC } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { IoClose } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import CartMenuItem from './CartMenuItem';
import { RootState } from '../../../store';
import EmptyCart from '../../../components/EmptyCart';

const SideMenu = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-flow: nowrap column;
  position: fixed;
  height: calc(100vh - 50px);
  width: 100vw;
  top: 50px;
  right: 0px;
  background: hsl(180deg 0% 10% / 50%);
  backdrop-filter: blur(8px) saturate(2);
  z-index: 10000;

  .action-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }

  .close-button {
    --btn-size: 30px;
    color: white;
    background-color: hsl(0deg, 60%, 60%);
    border-radius: 50%;
    padding: 0.25rem;
    height: var(--btn-size);
    width: var(--btn-size);

    &:hover {
      cursor: pointer;
      background-color: hsl(0deg, 60%, 40%);
    }
  }

  --animation-curve: transform 250ms cubic-bezier(0.075, 0.82, 0.265, 1);

  &.t-enter {
    transform: translateX(100%);
  }

  &.t-enter-active {
    transform: translateX(0%);
    transition: var(--animation-curve);
  }

  &.t-exit {
    transform: translateX(0%);
  }

  &.t-exit-active {
    transform: translateX(100%);
    transition: var(--animation-curve);
  }

  .list-items {
    overflow-y: auto;
    margin: 0;
    margin-bottom: 45px;

    & > *{
      margin: 1rem 0;
    }
  }

  .main-title {
    font-size: 1.5rem;
  }

  .menu-footer {
    position: absolute;
    z-index: 1000000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-size: 1.25rem;
    bottom: 0;
    height: 60px;
    left: 0;
    width: 100%;
    background-color: hsl(180deg 0% 10% / 50%);

    .finish-buy {
      all: unset;
    }

    .finish-buy {
      color: white;
      background: hsl(120, 100%, 25%);
      padding: 0.5rem;
      font-weight: 500;
      border-radius: 8px;
      &:hover {
        background: hsl(120, 100%, 20%);
        cursor: pointer;
      }
    }
  }
`;

interface Props {
  menuState: boolean;
  onClick: (state: boolean) => void;
}

const CartMenu: FC<Props> = ({ menuState, onClick }) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalPrice = items.reduce((acc, { price, quantity }) => (acc + price * quantity), 0);
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={menuState}
      classNames="t"
      timeout={250}
    >
      <SideMenu>
        <div className="action-buttons">
          <h3 className="main-title">CARRINHO DE COMPRAS</h3>
          <IoClose className="close-button" onClick={() => { onClick(false); }} />
        </div>
        <div className="list-items">
          {(items.length > 0)
            ? (items.map((item) => <CartMenuItem key={item.id} item={item} />))
            : <EmptyCart color="white" />}
        </div>
        <div className="menu-footer">
          <span>
            <b>TOTAL:</b>
            {` R$${Number(totalPrice).toFixed(2)}`}
          </span>
          <Link to="/checkout" className="finish-buy">
            Finalizar compra
          </Link>
        </div>
      </SideMenu>
    </CSSTransition>
  );
};

CartMenu.propTypes = {
  menuState: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CartMenu;
