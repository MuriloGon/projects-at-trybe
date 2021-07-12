import React from 'react';
import { useSelector } from 'react-redux';
import DoneRecipeCard from './DoneRecipeCard';

function DoneRecipe() {
  const doneRecipes = useSelector((store) => store.doneRecipes);
  return (
    <>
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
        >
          All
        </button>
      </div>

      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drink
      </button>

      { doneRecipes.map((data, index) => (
        <DoneRecipeCard data={ data } key={ index } />

      )) }

    </>
  );
}

export default DoneRecipe;
