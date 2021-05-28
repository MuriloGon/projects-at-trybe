import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import { itemByCategoryAndQuery } from '../../services/api';

import { ProductQuery } from '../../helpers/mlInterfaces';
import { RootState } from '../../store';

import CategoriesBar from './CategoriesBar';
import ProductsList from './ProductsList';

import { SideBar, Main as MainGeneric, Content } from './styles';
import { listLoaded, listLoading } from '../../slices/productsListSlice';
import SearchForm from './SearchForm';
import ToUpButton from './ToUpButton';

const Main = styled(MainGeneric)`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: 
    ". searchform searchform searchform"
    "sidebar content content content";

  > *:nth-child(1) {
    grid-area: searchform;
    margin-block: 1rem;
  }
  > *:nth-child(2) {
    grid-area: sidebar;
  }
  > *:nth-child(3) {
    grid-area: content;
  }
`;

const Search = (): JSX.Element => {
  const [query, setQuery] = useState<ProductQuery|null>(null);
  const [category, setCategory] = useState('');
  const lastSearch = useSelector(({ searchParams: { lastQuery } }:RootState) => lastQuery);
  const containerRef = useRef<HTMLElement>(null);
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
    <Main ref={containerRef}>
      <SearchForm />
      <SideBar>
        <CategoriesBar onSelect={setCategory} />
      </SideBar>
      <Content>
        <ProductsList query={query} />
      </Content>
      <ToUpButton containerRef={containerRef.current} />
    </Main>
  );
};

export default Search;
