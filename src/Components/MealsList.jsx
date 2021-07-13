import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuCard from './MenuCard';
import { ListCardContainer, CategoriesContainer } from '../styles/menuListStyles';
import { CategoryButton } from '../styles/genericComps';

function MealsList({ data, categories, getCategories }) {
  const [currentBtn, setCurrentBtn] = useState('All');

  if (!data[0].idMeal) return null;

  const handleCurrentSelected = (strCategory) => () => {
    getCategories(strCategory);
    if (strCategory === currentBtn) setCurrentBtn('All');
    else setCurrentBtn(strCategory);
  };

  return (
    <>
      {categories && (
        <CategoriesContainer>
          <div className="bg-blur-categories" />
          <CategoriesContainer.Wrapper>
            <CategoryButton
              data-testid="All-category-filter"
              type="button"
              onClick={ handleCurrentSelected('All') }
              variant={ currentBtn === 'All' ? 'accent' : 'secondary' }
            >
              All
            </CategoryButton>
            { categories.map(({ strCategory }, index) => (
              <CategoryButton
                type="button"
                key={ `${index}-meal` }
                data-testid={ `${strCategory}-category-filter` }
                onClick={ handleCurrentSelected(strCategory) }
                variant={ currentBtn === strCategory ? 'accent' : 'secondary' }
              >
                {strCategory}
              </CategoryButton>
            ))}
          </CategoriesContainer.Wrapper>
        </CategoriesContainer>
      )}
      <ListCardContainer>
        { data.map((meal, index) => (
          <MenuCard
            key={ `${meal.idMeal}-meal-card` }
            CardTestId={ `${index}-recipe-card` }
            TitleTestId={ `${index}-card-name` }
            imgTestId={ `${index}-card-img` }
            alt={ meal.strMeal }
            imgUrl={ meal.strMealThumb }
            title={ meal.strMeal }
            itemId={ meal.idMeal }
            type="meals"
          />
        ))}
      </ListCardContainer>
    </>
  );
}

MealsList.propTypes = {
  data: PropTypes.object,
  categories: PropTypes.object,
  getCategories: PropTypes.func,
}.isRequired;

export default MealsList;
