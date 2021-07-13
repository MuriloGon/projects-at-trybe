import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DoneRecipeCard from './DoneRecipeCard';

function DoneRecipe() {
  const [currBtn, setCurrBtn] = useState('');

  const doneRecipes = useSelector((store) => store.doneRecipes);

  const handleBtn = (str) => () => { setCurrBtn(str); };
  const filteredRecipes = doneRecipes.filter(({ type }) => {
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
      </div>

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

      { filteredRecipes.map((data, index) => (
        <DoneRecipeCard data={ data } index={ index } key={ index } />
      )) }

    </>
  );
}

export default DoneRecipe;
