import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { saveIngredientProgress } from '../../../../slices/inProgressRecipes';
import { RecipeIngredientContainer } from '../../../../styles/recipeDetails';

function renderNormalList({ list }) {
  return (
    <ul>
      {list.map(({ ingredient, measure, index }, i) => (
        <li
          data-testid={ `${i}-ingredient-name-and-measure` }
          key={ `${index}-list-item` }
        >
          <span>{`${ingredient} - ${measure}`}</span>
        </li>
      ))}
    </ul>
  );
}
function renderProgressList({ list, handleChange, color }) {
  const finished = (index) => list.find((item) => item.index === index).finished;
  const style = (index) => (
    { textDecoration: finished(index) ? 'line-through' : 'none' });

  const total = list.length;
  const parcial = list.filter((item) => item.finished).length;

  function styles() {
    return {
      width: '5px',
      background: color || 'blue',
      position: 'fixed',
      right: 0,
      top: `${100 - 100 * (parcial / total)}vh`,
      bottom: 0,
      transition: 'top 200ms ease',
      transform: 'rotateZ(180deg)',
      zIndex: '200',
    };
  }

  return (
    <ul>
      <div
        style={ styles() }
      />
      {list.map(({ ingredient, measure, index }, i) => (
        <li
          data-testid={ `${i}-ingredient-step` }
          key={ `${index}-list-item` }
          style={ style(index) }
        >
          <input
            checked={ finished(index) }
            name={ index }
            id={ `${i}-ingredient-step` }
            onChange={ handleChange }
            type="checkbox"
          />
          <label htmlFor={ `${i}-ingredient-step` }>{`${ingredient} - ${measure}`}</label>
        </li>
      ))}
    </ul>
  );
}

const favoritesByIdSelector = (type, id) => ({ inProgressRecipes }) => {
  switch (type) {
  case 'meals': return inProgressRecipes.meals[id] || [];
  case 'drinks': return inProgressRecipes.cocktails[id] || [];
  default: return inProgressRecipes;
  }
};

const computeInitialListState = (ingredients, favorites) => () => {
  const out = [...ingredients];
  return out.map((item) => ({
    ...item,
    finished: favorites.includes(item.index),
  }));
};

function Ingredients({ ingredients, inProgress, id, type, allowFinish }) {
  const favorites = useSelector(favoritesByIdSelector(type, id));
  const dispatch = useDispatch();
  const { primary1: color } = useTheme();
  const [list, setList] = useState(computeInitialListState(ingredients, favorites));

  const handleChange = ({ target: { name } }) => {
    const itemIndex = list.findIndex(({ index }) => index === Number(name));
    const copyState = [...list];
    copyState[itemIndex].finished = !copyState[itemIndex].finished;
    setList([...list]);
    const ingredientsList = copyState
      .filter(({ finished }) => finished)
      .map(({ index }) => index);
    dispatch(saveIngredientProgress({ id, type, ingredientsList }));
  };

  useEffect(() => {
    if (favorites.length >= list.length) allowFinish(false);
    else allowFinish(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);

  return (
    <RecipeIngredientContainer>
      <h2>Ingredients</h2>
      {inProgress
        ? renderProgressList({ list, handleChange, color })
        : renderNormalList({ list })}
    </RecipeIngredientContainer>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    ingredient: PropTypes.string,
    measure: PropTypes.string,
    finished: PropTypes.bool,
    index: PropTypes.number,
  })).isRequired,
  id: PropTypes.string.isRequired,
  inProgress: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  allowFinish: PropTypes.func.isRequired,
};

export default Ingredients;
