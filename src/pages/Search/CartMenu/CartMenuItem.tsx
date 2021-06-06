/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IoCloseCircle, IoChevronBackCircle, IoChevronForwardCircle } from 'react-icons/io5';
import styled from 'styled-components';
import { minusOneQty, plusOneQty, removeItem } from '../../../slices/shopCart';
import { CartData } from '../../../helpers/cart';

const MenuItem = styled.div`
  --card-height: 150px;
  display: flex;
  flex-flow: nowrap row;
  height: var(--card-height);
  background-color: hsla(0, 0%, 95%, 98%);
  border-radius: 8px;
  user-select: none;

  overflow: hidden;
  .thumbnail {
    object-fit: cover;
    width: var(--card-height);
    display: flex;
    align-items: center;
    background: white;

    & img {
      width: 100%;
      height: auto;
    }
  }

  .title {
    padding: 0.5rem;
    font-size: 1.1rem;
    display: flex;
    flex-flow: nowrap column;
    align-items: center;
    width: 100%;
    p {
      margin: 0;
      flex: 1;
      justify-content: center;
      align-items: center;
      text-align: center;
      display: flex;
      line-height: 1.35;
    }
  }

  .actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .action-btn {
    width: 40px;
    height: 40px;
    color: hsl(190deg,50%,50%);
    &:hover {
      filter: brightness(80%);
      cursor: pointer;
    }
  }

  .quantity-actions {
    display: flex;
    align-items: center;
  }

  .close-btn {
    color: hsl(0deg,60%,60%);
  } 
`;

const CartMenuItem: FC<{ item: CartData }> = ({ item }) => {
  const {
    id, image, price, quantity, title,
  } = item;
  const dispatch = useDispatch();

  return (
    <MenuItem>
      <div className="thumbnail">
        <img src={image} alt={title} />
      </div>
      <div className="title">
        <p>{title}</p>
        <div className="actions">
          <div className="quantity-actions">
            <IoChevronBackCircle
              className="action-btn"
              onClick={() => { dispatch(minusOneQty(id)); }}
            />
            <span>{`${quantity} x R$${Number(price).toFixed(2)}`}</span>
            <IoChevronForwardCircle
              className="action-btn"
              onClick={() => { dispatch(plusOneQty(id)); }}
            />
          </div>
          <div>
            {`R$${Number(quantity * price).toFixed(2)}`}
          </div>
          <IoCloseCircle
            className="action-btn close-btn"
            onClick={() => { dispatch(removeItem(id)); }}
          />
        </div>
      </div>
    </MenuItem>
  );
};

export default CartMenuItem;
