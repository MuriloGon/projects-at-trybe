import React from 'react';
import PropTypes from 'prop-types';
import MealsCard from './MealsCard';

function MealsList({ data, categories }) {
  return (
    <main>
      <header>
        { categories.map(({ strCategory }, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${strCategory}-category-filter` }
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
}.isRequired;

export default MealsList;
