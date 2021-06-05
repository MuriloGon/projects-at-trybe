import React, {
  FC, useEffect, useState,
} from 'react';
import { useParams } from 'react-router';

import Carrousel from './Carrousel';

import {
  Main, TechnicalSummary, PriceContainer, ImgContainer, Comments,
} from './styles';
import { getItemById } from '../../services/api';
import { Product } from '../../helpers/mercadolibre/product';
import TechnicalTable from './TechnicalTable';
import Price from './Price';

const ProductDetails: FC = () => {
  const [product, setProduct] = useState<Product|null>(null);
  const routeParams = useParams<{ id: string, title: string }>();

  useEffect(() => {
    const { id } = routeParams;
    getItemById(id).then((data) => {
      setProduct(data);
    }).catch(console.error);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (product === null || Object.entries(product).length <= 0) return <h1>Carregando...</h1>;

  return (
    <Main className="page-details">
      <ImgContainer>
        <Carrousel product={product} />
      </ImgContainer>
      <PriceContainer>
        <Price product={product} />
      </PriceContainer>
      <TechnicalSummary>
        <h2>Características do produto</h2>
        <TechnicalTable product={product} />
      </TechnicalSummary>
      <Comments>
        <h2>Avaliações</h2>
      </Comments>
    </Main>
  );
};

export default ProductDetails;
