import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoArrowBack, IoArrowForward, IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { CartData } from '../../helpers/cart';
import { minusOneQty, plusOneQty } from '../../slices/shopCart';

const ItemCard = styled.section`
  border-radius: 8px;
  user-select: none;
  margin-bottom: 0.75rem;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.15s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: flex;
  height: 120px;
  overflow: hidden;
  position: relative;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  }


  .remove-button {
    width: 25px;
    height: 25px;
    background-color: hsl(0, 59.80392156862747%, 60%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0.15rem;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
  }

  .remove-button:hover {
    background-color: hsl(0, 59.80392156862747%, 40%);
  }
`;

const CardImage = styled.div`
  width: 120px;
  overflow: hidden;
  object-fit: contain;
  object-position: center;

  img {
    width: 100%;
  }
`;

const CardContent = styled.div`
  box-sizing: border-box;
  background-color: hsl(0, 0%, 95%);
  padding: 0.75rem;
  display: flex;
  flex-flow: nowrap row;
  flex: 1;

  input[type="number"] {
    width: min-content;
  }

  div.title {
    flex: 1;
  }

  .action-button {
    width: 25px;
    height: 25px;
    background-color: #72d6ce;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0.15rem;
    cursor: pointer;
  }

  .action-button:hover {
    background-color: hsl(180, 60%, 45%);
  }

  .item-price {
    min-width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    &{
      flex-flow: nowrap column;
    }
  }
`;

const CartItem: FC<CartData> = ({
  id, quantity, image, title, price,
}) => {
  const dispatch = useDispatch();

  return (
    <ItemCard>
      <CardImage>
        <Link to={`/${id}-${title}`}>
          <img src={image} alt={title} />
        </Link>
      </CardImage>
      <CardContent>
        <div className="title">{title}</div>
        <div className="item-price">
          <IoArrowBack
            className="action-button"
            onClick={() => { dispatch(minusOneQty(id)); }}
          />

          <span>
            {quantity}
            {' x '}
            R$
            {Number(price).toFixed(2)}
          </span>

          <IoArrowForward
            className="action-button"
            onClick={() => { dispatch(plusOneQty(id)); }}
          />
        </div>
      </CardContent>
    </ItemCard>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartItem;
