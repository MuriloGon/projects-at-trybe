import React from 'react';
import PropTypes from 'prop-types';
import MenuCard from './MenuCard';
import { ListCardContainer, CategoriesContainer } from '../styles/menuListStyles';

function DrinksList({ data, categories, getCategories }) {
  const all = 'All';
  if (!data[0].idDrink) return null;
  return (
    <>
      <CategoriesContainer>
        <div className="bg-blur-categories" />
        <CategoriesContainer.Wrapper>
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
              key={ `${index}-drink` }
              data-testid={ `${strCategory}-category-filter` }
              onClick={ () => getCategories(strCategory) }
            >
              {strCategory}
            </button>
          ))}
        </CategoriesContainer.Wrapper>
      </CategoriesContainer>
      <ListCardContainer>
        { data.map((drink, index) => (
          <MenuCard
            key={ `${drink.idDrink}-drink-card` }
            CardTestId={ `${index}-recipe-card` }
            TitleTestId={ `${index}-card-name` }
            imgTestId={ `${index}-card-img` }
            alt={ drink.strDrink }
            imgUrl={ drink.strDrinkThumb }
            title={ drink.strDrink }
            itemId={ drink.idDrink }
            type="drinks"
          />
        ))}
      </ListCardContainer>
    </>
  );
}

DrinksList.propTypes = {
  data: PropTypes.object,
  categories: PropTypes.object,
  getCategories: PropTypes.func,
}.isRequired;

export default DrinksList;
