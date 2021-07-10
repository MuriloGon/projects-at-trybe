/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useSnackbar } from 'notistack';
import { Redirect } from 'react-router-dom';
import useMenuType from '../hooks/useMenuType';
import {
  fetchIngredient,
  fetchName,
  fetchFirstLetter,
} from '../services/apisMaps';
import { setSearchData } from '../slices/searchbar';

const TWELVE_ITEMS = 12;

const fetchSearch = ({ searchBar, type, searchName,
  setData, enqueueSnackbar }) => async () => {
  switch (searchBar) {
  case 'ingredient': {
    const data = await fetchIngredient(type)(searchName);
    if (data === null) setData(null);
    else setData(data.slice(0, TWELVE_ITEMS));
    break;
  }
  case 'name': {
    const data = await fetchName(type)(searchName);
    if (data === null) setData(null);
    else setData(data.slice(0, TWELVE_ITEMS));
    break;
  }
  case 'first-letter': {
    if (searchName.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
      enqueueSnackbar(
        'Sua busca deve conter somente 1 (um) caracter', { variant: 'error' },
      );
      break;
    }
    const data = await fetchFirstLetter(type)(searchName);
    if (data === null) setData(null);
    else setData(data.slice(0, TWELVE_ITEMS));
    break;
  }
  default: break;
  }
};

const MSG = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

function SearchBar() {
  const [searchName, setSearchName] = useState('');
  const [searchBar, setSearchBar] = useState('ingredient');
  const [data, setData] = useState();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const type = useMenuType(location);

  useEffect(() => {
    const status = true;
    if (data !== undefined) dispatch(setSearchData({ status, data }));
  }, [data]);

  if (data === null) {
    enqueueSnackbar(MSG, { variant: 'error' });
    alert(MSG);
  }

  if ((data !== null && data !== undefined) && data.length === 1) {
    const obj = data[0];
    const url = type === 'meals' ? `/comidas/${obj.idMeal}` : `/bebidas/${obj.idDrink}`;
    return <Redirect to={ url } />;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          data-testid="search-input"
          onChange={ (e) => setSearchName(e.target.value) }
        />
      </div>

      <div>
        <label htmlFor="ingredient">
          Ingrediente
          <input
            type="radio"
            id="ingredient"
            name="searchItem"
            value="ingredient"
            data-testid="ingredient-search-radio"
            defaultChecked
            onClick={ (e) => setSearchBar(e.target.value) }
          />
        </label>

        <label htmlFor="name">
          Nome
          <input
            type="radio"
            id="name"
            name="searchItem"
            value="name"
            data-testid="name-search-radio"
            onClick={ (e) => setSearchBar(e.target.value) }
          />
        </label>

        <label htmlFor="first-letter">
          Primeira Letra
          <input
            type="radio"
            id="first-letter"
            name="searchItem"
            value="first-letter"
            data-testid="first-letter-search-radio"
            onClick={ (e) => setSearchBar(e.target.value) }
          />
        </label>
      </div>

      <div>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ fetchSearch({ searchBar, type, searchName, setData }) }
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
