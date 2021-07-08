/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
// import { Redirect } from 'react-router-dom';
import useMenuType from '../hooks/useMenuType';
// import MenuCard from './MenuCard';
import {
  fetchIngredient,
  fetchName,
  fetchFirstLetter,
} from '../services/apisMaps';

function SearchBar() {
  const [searchName, setSearchName] = useState('');
  const [searchBar, setSearchBar] = useState('ingredient');
  const [data, setData] = useState();
  const location = useLocation();
  const type = useMenuType(location);

  const fetchSearch = () => {
    switch (searchBar) {
    case 'ingredient':
      fetchIngredient(type)(searchName).then(setData);
      break;
    case 'name':
      fetchName(type)(searchName).then(setData);
      break;
    case 'first-letter':
      if (searchName.length > 1) {
        alert('Sua busca deve conter somente 1 (um) caracter');
        break;
      }
      fetchFirstLetter(type)(searchName).then(setData);
      break;
    default: break;
    }
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  if (data === undefined) return <h1>Loading...</h1>;
  // console.log(fetchSearch());
  // const renderResults = () => {
  //   if (data.length === 0) {
  //     return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  //   }

  //   if (data.length === 1) return <Redirect to={ `/${type}/${data.idMeal}` } />;

  //   return data.map((recipe) => MenuCard(recipe));
  // };

  return (
    <>
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
          onClick={ () => fetchSearch() }
        >
          Buscar
        </button>
      </div>
      {(data === null) && <h1>Dados não encontrados</h1> }
    </>
  );
}

export default SearchBar;
