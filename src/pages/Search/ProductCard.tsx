/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { Result } from '../../helpers/mercadolibre/ProductQuery';
import { Product, ProductContent, ProductImage } from './styles';

function thousandSep(string: string, spacer = ',') {
  const str = string.split('').reverse();
  const out: Array<string> = [];
  str.forEach((num, i) => {
    if ((i) % 3 === 0 && i !== 0) { out.push(spacer); }
    out.push(num);
  });
  return out.reverse().join('');
}

const stilizedPrice = (
  price: number | null,
  prefix = '',
  className = '',
  discount: number|null = null,
) => {
  if (price === null) return null;

  const [integer, decimal] = price.toFixed(2).split('.');

  return (
    <div className={`stylizedPrice ${className}`}>
      {prefix === '' ? null : `${prefix} `}
      {thousandSep(integer)}
      <span className="decimalPrice">{decimal}</span>
      {discount && (
        <span className="discount">
          {discount}
          % OFF
        </span>
      )}
    </div>
  );
};

const installments = (product: Result) => {
  if (product.installments === null) return null;

  const { installments: { amount, quantity, rate } } = product;

  const isFreeShipping = rate === 0;

  if (!isFreeShipping) {
    return (
      <p className="installments">
        em
        {stilizedPrice(amount, ` ${quantity}x R$`, 'installments-no-styled')}
      </p>
    );
  }

  return (
    <p className="installments">
      em
      {stilizedPrice(amount, ` ${quantity}x R$`, 'installments-styled')}
      <span className="installments-styled">
        {' '}
        sem juros
      </span>
    </p>
  );
};

const discountWarn = (discount: number | null) => {
  if (discount === null) return null;
  return (
    <div className="discount-warn">
      {discount}
      % OFF
    </div>
  );
};

const freeShipping = (product: Result) => {
  if (product === null) return null;
  if (product.installments === null) return null;
  if (product.installments.rate === 0) return null;

  return (
    <div className="free-shipping">
      Frete grátis
    </div>
  );
};

const useDiscount = (product: Result) => {
  let discount = null;
  if (product.original_price !== null) {
    const { original_price: op, price: p } = product;
    if (op !== null) discount = Math.floor((op / p - 1) * 100);
    if (discount === 0) discount = null;
  }
  return discount;
};

const ProductCard: FC<{ product: Result }> = ({ product }) => {
  const discount = useDiscount(product);
  return (
    <Product>
      <ProductImage>
        <img src={`https://http2.mlstatic.com/D_NQ_NP_${product.thumbnail_id}-V.webp`} alt={product.title} />
      </ProductImage>
      <ProductContent>
        {stilizedPrice(product.original_price, 'R$', 'oldPrice')}
        {stilizedPrice(product.price, 'R$', '', discount)}
        {installments(product)}
        {discountWarn(discount)}
        {freeShipping(product)}
        <div className="product-title">{product.title}</div>
      </ProductContent>
    </Product>
  );
};

export default ProductCard;
