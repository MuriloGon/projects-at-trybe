import React from 'react';
import PropTypes from 'prop-types';
import MenuCard from './MenuCard';

function MealsList({ data, categories, getCategories }) {
  const all = 'All';
  return (
    <main>
      <header>
        <button
          type="button"
          onClick={ () => getCategories(all) }
        >
          All
        </button>
        { categories.map(({ strCategory }, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${strCategory}-category-filter` }
            onClick={ () => getCategories(strCategory) }
          >
            {strCategory}
          </button>
        ))}
      </header>
      <section>
        <div data-testid="meals-list" className="class-meals-list">
          { data.map((meal, index) => (
            <MenuCard
              key={ `${meal.idMeal}-card` }
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
  getCategories: PropTypes.func,
}.isRequired;

export default MealsList;
