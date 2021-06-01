/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddToCartBtn from '../../components/AddToCartBtn';
import { CartData } from '../../helpers/cart';
import { Result } from '../../helpers/mercadolibre/ProductQuery';
import {
  discountParse, discountWarn, freeShipping,
  installments, stylizedPrice,
} from '../../helpers/productInfo';
import { RootState } from '../../store';
import {
  Product, ProductContent, ProductImage,
} from './styles';

const ProductCard: FC<{ product: Result }> = ({ product }) => {
  const discount = discountParse(product.original_price, product.price);
  const safeTitle = product.title.replaceAll('%', '-').replaceAll(' ', '_').replaceAll('/', '-');
  const ids = useSelector((state: RootState) => state.cart.items).map(({ id }) => id);

  const data: CartData = {
    id: product.id,
    image: product.thumbnail,
    quantity: 1,
    title: product.title,
  };

  const outline = ids.includes(product.id) ? '3px solid hsl(190deg,50%,50%)' : '';

  return (
    <AddToCartBtn productData={data}>
      <Link to={`/${product.id}-${safeTitle}`}>
        <Product style={{ outline }}>
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
    </AddToCartBtn>
  );
};

export default ProductCard;
