import React from 'react';
import PropTypes from 'prop-types';
import MenuCard from './MenuCard';

function MealsList({ data, categories, getCategories }) {
  const all = 'All';
  if (!data[0].idMeal) return null;
  return (
    <main>
      {categories && (
        <header>
          <button
            data-testid="all-category-filter"
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
      <section>
        <div data-testid="meals-list" className="class-meals-list">
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
        </div>
      </section>
    </main>
  );
}

MealsList.propTypes = {
  data: PropTypes.object,
  categories: PropTypes.object,
  getCategories: PropTypes.func,
}.isRequired;

export default MealsList;
