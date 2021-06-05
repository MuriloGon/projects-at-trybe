import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconType } from 'react-icons/lib';
import { IoCartOutline, IoCart, IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CartData } from '../helpers/cart';
import { addItem, removeItem } from '../slices/shopCart';
import { RootState } from '../store';

const CardContainer = styled.div`
    --side: 25px;
  position: relative;

  .cart-btn {
    padding: 0.5rem;
    border-radius: 50%;
    width: var(--side);
    height: var(--side);
    background: white;
    background-size: 65%;
    border: none;
    transition: background 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }

  .cart-btn:hover {
    background-color: hsl(190deg,50%,90%);
    cursor: pointer;
  }

  .cart-btn:active {
    background-color: hsl(190deg,50%,80%);
  }

  .action-buttons {
    padding: calc(var(--side) / 5);
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 0;
    width: 100%;
    box-sizing: border-box;
  }

  .qty-icon {
    background: hsl(190deg,50%,50%);
    color: white;
    font-weight: 500;
    font-size: 1.35rem;
  }
`;

interface PropsCart {
  children: React.ReactElement,
  productData: CartData
  selected: boolean
}

// eslint-disable-next-line react/prop-types
const CartButtonsWrapper: FC<PropsCart> = ({ children, productData, selected }) => {
  const dispatch = useDispatch();
  const qty = useSelector((state: RootState) => state.cart.items)
    .find(({ id }) => id === productData.id)?.quantity;

  const currentIcon = (Component: IconType, cb: ()=>void) => (
    <Component
      className="cart-btn"
      onClick={cb}
    />
  );

  const addCb = () => { dispatch(addItem(productData)); };
  const rmvCb = () => { dispatch(removeItem(productData.id)); };

  return (
    <CardContainer>
      {children}
      <div className="action-buttons">
        {selected ? currentIcon(IoCart, addCb) : currentIcon(IoCartOutline, addCb) }
        {selected && <div className="cart-btn qty-icon">{qty}</div>}
        {selected && currentIcon(IoClose, rmvCb)}
      </div>
    </CardContainer>
  );
};

CartButtonsWrapper.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartButtonsWrapper;
