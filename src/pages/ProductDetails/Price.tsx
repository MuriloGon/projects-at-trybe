/* eslint-disable react/prop-types */
import React, { FC, useState } from 'react';
import { IoArrowBack, IoArrowForward, IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import ReactStarts from 'react-stars';
import { CartData } from '../../helpers/cart';
import { Product } from '../../helpers/mercadolibre/product';
import {
  discountParse, discountWarn, freeShipping, mercadoPago,
  stylizedPrice,
} from '../../helpers/productInfo';
import { addItemByAmount, removeItem } from '../../slices/shopCart';
import { RootState } from '../../store';

const Seller: FC<{ seller:Product['seller_address'] | undefined }> = ({ seller }) => {
  if (seller === undefined) return null;

  const lineInfo = () => (
    <p className="seller-location">
      {seller.state.name}
      {' '}
      {' - '}
      {seller.city.name}
      {' - '}
      {seller.country.name}
    </p>
  );

  return (
    <div className="sellerInfo">
      <h3>Vendedor</h3>
      {lineInfo()}
    </div>
  );
};

const Price: FC<{ product: Product | null }> = ({ product }) => {
  const [itemQty, setItemQty] = useState(1);
  const dispatch = useDispatch();
  const qtyOnCart = useSelector((state: RootState) => state.cart.items)
    .find(({ id }) => id === product?.id)?.quantity;
  const discount = discountParse(
    product?.original_price, product !== null ? product.price : null,
  );
  const avgRating = useSelector((st: RootState) => st.comments.comments)
    .find(({ id }) => id === product?.id)?.comments
    .reduce((acc, { rating }, index, arr) => {
      if (index === (arr.length - 1)) {
        return (acc + rating) / arr.length;
      }
      return acc + rating;
    }, 0);

  const freeShip = product?.shipping !== undefined ? product.shipping.free_shipping : null;

  const itemData: CartData = {
    id: (product as Product).id,
    image: (product as Product).thumbnail,
    price: (product as Product).price,
    quantity: itemQty,
    title: (product as Product).title,
  };

  return (
    <section className="prices">
      <div className="product-id">{product?.id}</div>
      <ReactStarts size={25} value={avgRating} edit={false} />
      <p className="product-title">
        {product?.title}
      </p>

      <div className="price-presentation">
        {stylizedPrice(
          product?.original_price !== undefined ? product.original_price : null,
          'R$',
          'old-price',
        )}

        {stylizedPrice(
          product?.price !== undefined ? product.price : null,
          'R$',
          'price-value',
          discount,
        )}
      </div>

      <div className="warnings">
        {discountWarn(discount)}
        {mercadoPago(product?.accepts_mercadopago)}
        {freeShipping(freeShip)}
      </div>

      <div className="infos">
        <div className="product-info">
          <h3>Quantidade</h3>
          <div>
            {product?.available_quantity}
            {' '}
            disponível
          </div>
          <div>
            {product?.sold_quantity}
            {' '}
            vendidos
          </div>
          <div>{product?.warranty}</div>
        </div>
        <Seller seller={product?.seller_address} />
      </div>

      <hr />

      <div className="add-to-cart">
        <div className="item-price">
          <IoArrowBack
            className="action-button"
            onClick={() => { setItemQty(itemQty - 1); }}
          />

          <span>
            {itemQty}
          </span>

          <IoArrowForward
            className="action-button"
            onClick={() => { setItemQty(itemQty + 1); }}
          />
          <button
            onClick={() => {
              dispatch(addItemByAmount(
                { item: itemData, qty: itemQty },
              ));
            }}
            className="add-cart-btn"
            type="button"
          >
            Adicionar o carrinho
          </button>
        </div>
      </div>

      <hr />

      { (qtyOnCart)
        ? (
          <div className="item-on-cart">
            <span>
              <b>Adicionados ao cart:</b>
              {' '}
              {qtyOnCart}
            </span>
            <IoClose
              className="remove-item-btn"
              onClick={() => { dispatch(removeItem((product as Product).id)); }}
            />
          </div>
        ) : null}
    </section>
  );
};

export default Price;
