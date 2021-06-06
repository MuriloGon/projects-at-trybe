/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import emptyCart from '../assets/empty-cart.svg';

const EmptyCart: FC<{ color: string }> = ({ color }) => (
  <div style={{ color, userSelect: 'none' }}>
    <h3>Seu carrinho está vazio</h3>
    <img src={emptyCart} alt="empty-cart" />
  </div>
);

export default EmptyCart;
