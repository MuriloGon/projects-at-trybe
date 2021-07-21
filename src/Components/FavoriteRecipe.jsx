import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteRecipeCard from './FavoriteRecipeCard';
import { FavoriteRecipesContainer } from '../styles/favoriteRecipesStyles';
import { CategoriesContainer } from '../styles/menuListStyles';
import { CategoryButton } from '../styles/genericComps';

function FavoriteRecipe() {
  const [currBtn, setCurrBtn] = useState('');
  const favoriteRecipes = useSelector((store) => store.favoriteRecipes);

  const handleBtn = (str) => () => { setCurrBtn(str); };
  const filteredFavorite = favoriteRecipes.filter(({ type }) => {
    if (currBtn === 'comida' || currBtn === 'bebida') return type === currBtn;
    return true;
  });

  return (
    <FavoriteRecipesContainer>
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
      <div>
        { filteredFavorite.map((data, index) => (
          <FavoriteRecipeCard data={ data } index={ index } key={ index } />
        )) }
      </div>
    </FavoriteRecipesContainer>
  );
}

export default FavoriteRecipe;
