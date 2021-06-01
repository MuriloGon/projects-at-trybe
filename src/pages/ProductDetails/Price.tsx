/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { Product } from '../../helpers/mercadolibre/product';
import {
  discountParse, discountWarn, freeShipping, mercadoPago,
  stylizedPrice,
} from '../../helpers/productInfo';

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
  const discount = discountParse(
    product?.original_price, product !== null ? product.price : null,
  );

  const freeShip = product?.shipping !== undefined ? product.shipping.free_shipping : null;

  return (
    <section className="prices">
      <div className="product-id">{product?.id}</div>
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

    </section>
  );
};

export default Price;
