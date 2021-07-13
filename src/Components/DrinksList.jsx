import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuCard from './MenuCard';
import { ListCardContainer, CategoriesContainer } from '../styles/menuListStyles';
import { CategoryButton } from '../styles/genericComps';

function DrinksList({ data, categories, getCategories }) {
  const [currentBtn, setCurrentBtn] = useState('All');

  if (!data[0].idDrink) return null;

  const handleCurrentSelected = (strCategory) => () => {
    getCategories(strCategory);
    if (strCategory === currentBtn) setCurrentBtn('All');
    else setCurrentBtn(strCategory);
  };
  return (
    <>
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
              key={ `${index}-drink` }
              data-testid={ `${strCategory}-category-filter` }
              onClick={ handleCurrentSelected(strCategory) }
              variant={ currentBtn === strCategory ? 'accent' : 'secondary' }
            >
              {strCategory}
            </CategoryButton>
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
