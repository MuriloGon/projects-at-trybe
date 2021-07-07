import React from 'react';
import PropTypes from 'prop-types';
import MealsCard from './MealsCard';

function MealsList({ data, categories, getCategories }) {
  return (
    <main>
      <header>
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
          { data.map((meal, index) => <MealsCard key={ index } meal={ meal } />)}
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
