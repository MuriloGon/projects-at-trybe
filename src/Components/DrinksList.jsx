import React from 'react';
import PropTypes from 'prop-types';
import MenuCard from './MenuCard';

function DrinksList({ data, categories }) {
  if (!data[0].idDrink) return null;
  return (
    <main>
      <header>
        { categories.map(({ strCategory }, index) => (
          <button
            type="button"
            key={ `${index}-drink` }
            data-testid={ `${strCategory}-category-filter` }
          >
            {strCategory}
          </button>
        ))}
      </header>
      <section>
        <div data-testid="drinks-list" className="class-drinks-list">
          { data.map((drink, index) => (
            <MenuCard
              key={ `${drink.idDrink}-drink-card` }
              CardTestId={ `${index}-recipe-card` }
              TitleTestId={ `${index}-card-name` }
              imgTestId={ `${index}-card-img` }
              alt={ drink.strDrink }
              imgUrl={ drink.strDrinkThumb }
              title={ drink.strDrink }
            />
          ))}
        </div>
      </section>
    </main>
  );
}

DrinksList.propTypes = {
  data: PropTypes.object,
  categories: PropTypes.object,
}.isRequired;

export default DrinksList;
