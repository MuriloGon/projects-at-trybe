import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { itemByCategoryAndQuery } from '../../services/api';

import { ProductQuery } from '../../helpers/mlInterfaces';
import { RootState } from '../../store';

import CategoriesBar from './CategoriesBar';
import ProductsList from './ProductsList';

import { SideBar, Main, Content } from './styles';

const Search = (): JSX.Element => {
  const [query, setQuery] = useState<ProductQuery|null>(null);
  const [category, setCategory] = useState('');
  const lastSearch = useSelector(({ searchParams: { lastQuery } }:RootState) => lastQuery);

  const getProducts = async (product: string) => {
    const data = await itemByCategoryAndQuery(category, product);
    setQuery(data);
  };

  useEffect(() => {
    getProducts(lastSearch).then(() => {}).catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, lastSearch]);

  return (
    <Main>
      <SideBar>
        <CategoriesBar onSelect={setCategory} />
      </SideBar>
      <Content>
        <ProductsList query={query} />
      </Content>
    </Main>
  );
};

export default Search;
