/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductQuery } from '../../helpers/mlInterfaces';
import {
  ProdList, Product, ProductContent, ProductImage,
} from './styles';
import ProductCard from './ProductCard';

import { RootState } from '../../store';

interface Props {
  query: ProductQuery | null;
}

const ProdCardPlaceholder: FC = () => (
  <Product>
    <ProductImage className="animated-background" />
    <ProductContent>
      <div className="ph-price animated-background" />
      <div className="ph-description animated-background" />
    </ProductContent>
  </Product>
);

const listLoadingSel = (state: RootState) => state.productsList.loading;

const ProductsList: FC<Props> = ({ query }) => {
  const loading = useSelector(listLoadingSel);

  if (query === null) return null;

  if (query?.results.length === 0) {
    return (
      <h2 style={{ textAlign: 'center' }}>
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    );
  }

  return (
    <ProdList>
      { loading
        ? Array(12).fill(<ProdCardPlaceholder />)
        : query?.results.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))}
    </ProdList>
  );
};

export default ProductsList;
