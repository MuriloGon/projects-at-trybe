/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { ProductQuery } from '../../helpers/mlInterfaces';
import { ProdList } from './styles';
import ProductCard from './ProductCard';

interface Props {
  query: ProductQuery | null;
}

const ProductsList: FC<Props> = ({ query }) => {
  if (query === null) return <h1>loading</h1>;

  return (
    <ProdList>
      {
        query.results.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))
      }
    </ProdList>
  );
};

export default ProductsList;
