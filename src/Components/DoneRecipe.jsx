import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DoneRecipeCard from './DoneRecipeCard';
import { FavoriteRecipesContainer } from '../styles/favoriteRecipesStyles';
import { CategoriesContainer } from '../styles/menuListStyles';
import { CategoryButton } from '../styles/genericComps';

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
      <CategoriesContainer>
        <div className="bg-blur-categories" />
        <CategoriesContainer.Wrapper>
          <CategoryButton
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ handleBtn('') }
            variant={ currBtn === '' ? 'accent' : 'secondary' }
          >
            All
          </CategoryButton>

          <CategoryButton
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ handleBtn('comida') }
            variant={ currBtn === 'comida' ? 'accent' : 'secondary' }
          >
            Food
          </CategoryButton>

          <CategoryButton
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ handleBtn('bebida') }
            variant={ currBtn === 'bebida' ? 'accent' : 'secondary' }
          >
            Drink
          </CategoryButton>
        </CategoriesContainer.Wrapper>
      </CategoriesContainer>
      <FavoriteRecipesContainer>
        { filteredRecipes.map((data, index) => (
          <DoneRecipeCard data={ data } index={ index } key={ index } />
        )) }
      </FavoriteRecipesContainer>

    </>
  );
}

export default DoneRecipe;
