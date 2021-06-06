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
import ShowCategoriesButton from './ShowCategoriesButton';
import CartMenu from './CartMenu';
import CartBtn from './CartBtn';

const Main = styled(MainGeneric)`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: 
    ". searchform searchform searchform"
    "sidebar content content content";

  .searchform {
    grid-area: searchform;
    margin-block: 1rem;
  }
  .sidebar {
    grid-area: sidebar;
  }
  .content {
    grid-area: content;
  }

  @media screen and (max-width: 900px) {
    grid-template-areas: 
      "sidebar sidebar"
      "searchform searchform"
      "content content";
  }
`;

const Search = (): JSX.Element => {
  const [query, setQuery] = useState<ProductQuery|null>(null);
  const [category, setCategory] = useState('');
  const [cartMenu, setCartMenu] = useState(false);

  const lastSearch = useSelector(({ searchParams: { lastQuery } }:RootState) => lastQuery);
  const containerRef = useRef<HTMLElement>(null);
  const sidemenuRef = useRef<HTMLElement>(null);
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

  const handleOpenMenuCategory = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'ASIDE') {
      sidemenuRef.current?.classList.toggle('menu-open');
    }
  };

  return (
    <Main ref={containerRef}>
      <SearchForm className="searchform" />
      <SideBar
        className="sidebar"
        ref={sidemenuRef}
        onClick={(e) => { handleOpenMenuCategory(e); }}
      >
        <CategoriesBar onSelect={setCategory} />
      </SideBar>
      <Content className="content">
        <ProductsList query={query} />
      </Content>
      <ShowCategoriesButton categoriesRef={sidemenuRef.current} />
      <CartMenu menuState={cartMenu} onClick={setCartMenu} />
      <CartBtn onClick={() => { setCartMenu(!cartMenu); }} />
      <ToUpButton containerRef={containerRef.current} />
    </Main>
  );
};

export default Search;
