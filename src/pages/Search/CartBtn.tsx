/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { FC } from 'react';
import { IoCartOutline } from 'react-icons/io5';

import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  left: 2.5vh;
  bottom: 5vh;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  background: hsl(190deg,50%,50%);
  z-index: 9999;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  transform: translateY(-100%);
  user-select: none;
  transition: transform 0.15s ease, opacity 0.15s linear;

  :hover {
    background-color: hsl(190deg,50%,30%);
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

interface Props {
  onClick: () => void;
}

const CartBtn: FC<Props> = ({ onClick }) => (
  <Div
    onClick={() => { onClick(); }}
  >
    <IoCartOutline />
  </Div>
);

export default CartBtn;
