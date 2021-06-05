/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

import { RootState } from '../../store';
import { Main as GenericMain } from '../../styles/Container';
import CartItem from './CartItem';
import { removeItem } from '../../slices/shopCart';

const Main = styled(GenericMain)`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1.75fr 1fr;
  grid-template-rows: auto auto;

  ul {
    padding: 0;
  }

  .cart-title {
    grid-row: 1;
    grid-column: 1/3;
  }

  .list-items {
    grid-row: 2;
    grid-column: 1/2;
  }

  @media screen and (max-width: 800px) {
    &{
      display: block;
    }
  }
`;

const Summary = styled.section`
  padding: 4rem;
  grid-row: 2/3;
  grid-column: 2/3;
  background-color: white;
  padding: 1rem;
  margin-left: 1rem;
  border-radius: 8px;
  display: flex;
  flex-flow: nowrap column;
  height: min-content;

  h3 { margin: 0 0 0.5rem 0; }

  ol {
    padding-left: 1.25rem; 
    margin: 1rem 0 0;
    p {
      margin: 0.5rem  1rem 0 0;
    }
  }

  .summary-card { position: relative; }

  .summary-items {
    margin: 0;
  }

  .total-price {
    font-size: 1.25rem;
    margin: 0;

    &>* {
      display: block;
      margin-top: 1rem;
    }
  }

  .cart-finish, .cart-finish:hover, .cart-finish:focus, .cart-finish:active {
      text-decoration: none;
      color: inherit;
  }

  .summary-remove {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    top: 0;

    &:hover {
      background: hsl(0, 80%, 40%);
      color: white;
      border-radius: 50%;
      cursor: pointer;
    }
    
  }

  .cart-finish {
    background-color: #35ad35;
    color: white;
    padding: 0.5rem;
    font-size: 1.15rem;
    border-radius: 8px;
    box-sizing: border-box;
    display: inline-block;
    font-weight: 600;
    &:hover {
      background-color: #297a29;
      color: white;
    }
    &:hover {
      background-color: #297a68;
      color: white;
    }
  }

  @media screen and (max-width: 800px) {
    &{ margin: 0; }
  }
`;

const Cart: FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (acc, { price, quantity }) => (acc + (price * quantity)), 0,
  );

  if (cartItems.length <= 0) {
    return (
      <Main>
        <h2 className="cart-title">Carrinho de compras</h2>
        <p>Seu carrinho de compras está vazio</p>
      </Main>
    );
  }

  return (
    <Main>
      <h2 className="cart-title">Carrinho de compras</h2>
      <div className="list-items">
        <ul>
          {cartItems.map((props) => (
            <CartItem key={props.id} {...props} />
          ))}
        </ul>
      </div>
      <Summary className="cart-summary">
        <h3>Resumo</h3>
        <ol className="summary-items">
          {cartItems.map((prod) => (
            <li className="summary-card" key={prod.id}>
              <p>{prod.title}</p>
              <p>
                <b>Subtotal:</b>
                {'  '}
                R$
                {Number(prod.price * prod.quantity).toFixed(2)}
              </p>
              <IoClose
                className="summary-remove"
                onClick={() => { dispatch(removeItem(prod.id)); }}
              />
            </li>
          ))}
        </ol>
        <hr />
        <p className="total-price">
          <span>
            <b>
              Total:
            </b>
            {' '}
            R$
            {Number(totalPrice).toFixed(2)}
          </span>
          <Link to="checkout" className="cart-finish">
            Finalizar Compra
          </Link>
        </p>
      </Summary>
    </Main>
  );
};

Cart.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Cart;
