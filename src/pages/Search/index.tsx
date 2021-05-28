import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { itemByCategoryAndQuery } from '../../services/api';

import { ProductQuery } from '../../helpers/mlInterfaces';
import { RootState } from '../../store';

import CategoriesBar from './CategoriesBar';
import ProductsList from './ProductsList';

import { SideBar, Main, Content } from './styles';
import { listLoaded, listLoading } from '../../slices/productsListSlice';

const Search = (): JSX.Element => {
  const [query, setQuery] = useState<ProductQuery|null>(null);
  const [category, setCategory] = useState('');
  const lastSearch = useSelector(({ searchParams: { lastQuery } }:RootState) => lastQuery);
  const dispatch = useDispatch();

  const getProducts = async (product: string) => {
    dispatch(listLoading());
    const data = await itemByCategoryAndQuery(category, product);
    setQuery(data);
    dispatch(listLoaded());
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
