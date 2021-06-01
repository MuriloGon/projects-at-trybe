import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import addCartIcon from '../assets/add-cart-icon.svg';
import { CartData } from '../helpers/cart';
import { addItem } from '../slices/shopCart';

const CardContainer = styled.div`
  position: relative;

  button {
    --side: 50px;
    position: absolute;
    right: calc(var(--side) / 5);
    top: calc(var(--side) / 5);
    padding: 1rem;
    border-radius: 50%;
    width: var(--side);
    height: var(--side);
    background-image: url(${addCartIcon});
    background-repeat: no-repeat;
    background-position: center; 
    background-size: 65%;
    border: none;
    transition: background 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.15);
  }

  button:hover {
    background-color: hsl(190deg,50%,90%);
    cursor: pointer;
  }

  button:active {
    background-color: hsl(190deg,50%,80%);
  }

  .buttonActions {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
  }
`;

interface PropsCart {
  children: React.ReactElement,
  productData: CartData
}

// eslint-disable-next-line react/prop-types
const CardWithButton: FC<PropsCart> = ({ children, productData }) => {
  const dispatch = useDispatch();

  return (
    <CardContainer>
      {children}
      <button type="button" onClick={() => { dispatch(addItem(productData)); }}> </button>
    </CardContainer>
  );
};

export default CardWithButton;
