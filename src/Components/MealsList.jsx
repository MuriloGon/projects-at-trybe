import React from 'react';
import PropTypes from 'prop-types';
import MenuCard from './MenuCard';
import { ListCardContainer } from '../styles/menuListStyles';

function MealsList({ data, categories, getCategories }) {
  const all = 'All';
  if (!data[0].idMeal) return null;
  return (
    <>
      {categories && (
        <header>
          <button
            data-testid="All-category-filter"
            type="button"
            onClick={ () => getCategories(all) }
          >
            All
          </button>
          { categories.map(({ strCategory }, index) => (
            <button
              type="button"
              key={ `${index}-meal` }
              data-testid={ `${strCategory}-category-filter` }
              onClick={ () => getCategories(strCategory) }
            >
              {strCategory}
            </button>
          ))}
        </header>
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
