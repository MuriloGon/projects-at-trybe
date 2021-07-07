import React from 'react';
import PropTypes from 'prop-types';
import MenuCard from './MenuCard';

function MealsList({ data, categories }) {
  if (!data[0].idMeal) return null;
  return (
    <main>
      <header>
        { categories.map(({ strCategory }, index) => (
          <button
            type="button"
            key={ `${index}-meal` }
            data-testid={ `${strCategory}-category-filter` }
          >
            {strCategory}
          </button>
        ))}
      </header>
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
}.isRequired;

export default MealsList;
