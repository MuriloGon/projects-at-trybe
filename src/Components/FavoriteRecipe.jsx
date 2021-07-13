import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteRecipeCard from './FavoriteRecipeCard';

function FavoriteRecipe() {
  const [currBtn, setCurrBtn] = useState('');
  const favoriteRecipes = useSelector((store) => store.favoriteRecipes);

  const handleBtn = (str) => () => { setCurrBtn(str); };
  const filteredFavorite = favoriteRecipes.filter(({ type }) => {
    if (currBtn === 'comida' || currBtn === 'bebida') return type === currBtn;
    return true;
  });

  return (
    <>
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ handleBtn('') }
        >
          All
        </button>

        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ handleBtn('comida') }
        >
          Food
        </button>

        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ handleBtn('bebida') }
        >
          Drink
        </button>
      </div>
      <div>
        { filteredFavorite.map((data, index) => (
          <FavoriteRecipeCard data={ data } index={ index } key={ index } />
        )) }
      </div>
    </>
  );
}

export default FavoriteRecipe;
