/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Result } from './mercadolibre/ProductQuery';
import {
  DiscountWarn, FreeShipping, Installments, MercadoPago, StyledPrice,
} from './productInfoStyles';

export const thousandSep = (string: string, spacer = ',') => {
  const str = string.split('').reverse();
  const out: Array<string> = [];
  str.forEach((num, i) => {
    if ((i) % 3 === 0 && i !== 0) { out.push(spacer); }
    out.push(num);
  });
  return out.reverse().join('');
};

export const stylizedPrice = (
  price: number | null,
  prefix = '',
  className = '',
  discount: number|null = null,
) => {
  if (price === null) return null;

  const [integer, decimal] = price.toFixed(2).split('.');

  return (
    <StyledPrice className={`${className}`}>
      {prefix === '' ? null : `${prefix} `}
      {thousandSep(integer)}
      <span className="decimalPrice">{decimal}</span>
      {discount && (
        <span className="discount">
          {discount}
          % OFF
        </span>
      )}
    </StyledPrice>
  );
};

export const installments = (product: Result) => {
  if (product.installments === null) return null;

  const { installments: { amount, quantity, rate } } = product;

  const isFreeShipping = rate === 0;

  if (!isFreeShipping) {
    return (
      <Installments>
        em
        {stylizedPrice(amount, ` ${quantity}x R$`, 'no-styled')}
      </Installments>
    );
  }

  return (
    <Installments>
      em
      {stylizedPrice(amount, ` ${quantity}x R$`, 'styled')}
      <span className="styled">
        {' '}
        sem juros
      </span>
    </Installments>
  );
};

export const discountWarn = (discount: number | null) => {
  if (discount === null) return null;
  return (
    <DiscountWarn>
      {discount}
      % OFF
    </DiscountWarn>
  );
};

export const freeShipping = (isFreeShipping: boolean | null) => {
  if (!isFreeShipping || isFreeShipping === null) return null;
  return (
    <FreeShipping>
      Frete grátis
    </FreeShipping>
  );
};

export const mercadoPago = (accept: boolean | undefined) => (accept ? (
  <MercadoPago> Mercadopago </MercadoPago>
) : null);

export const discountParse = (originalPrice: number | null, price: number | null) => {
  let discount = null;
  if (originalPrice !== null && price !== null) {
    discount = Math.floor((originalPrice / price - 1) * 100);
    if (discount === 0) discount = null;
  }
  return discount;
};
