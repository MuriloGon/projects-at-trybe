/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Result } from '../../helpers/mercadolibre/ProductQuery';
import {
  discountParse,
  discountWarn, freeShipping, installments, stylizedPrice,
} from '../../helpers/productInfo';
import { Product, ProductContent, ProductImage } from './styles';

const ProductCard: FC<{ product: Result }> = ({ product }) => {
  const discount = discountParse(product.original_price, product.price);
  const safeTitle = product.title.replaceAll('%', '-').replaceAll(' ', '_').replaceAll('/', '-');
  return (
    <Link to={`/${product.id}-${safeTitle}`}>
      <Product>
        <ProductImage>
          <img src={`https://http2.mlstatic.com/D_NQ_NP_${product.thumbnail_id}-V.webp`} alt={product.title} />
        </ProductImage>
        <ProductContent>
          {stylizedPrice(product.original_price, 'R$', 'oldPrice')}
          {stylizedPrice(product.price, 'R$', '', discount)}
          {installments(product)}
          {discountWarn(discount)}
          {freeShipping(product.shipping.free_shipping)}
          <div className="product-title">{product.title}</div>
        </ProductContent>
      </Product>
    </Link>
  );
};

export default ProductCard;
