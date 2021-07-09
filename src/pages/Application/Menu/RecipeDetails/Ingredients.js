import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { saveIngredientProgress } from '../../../../slices/inProgressRecipes';

function renderNormalList({ list }) {
  return (
    <ul>
      {list.map(({ ingredient, measure, index }, i) => (
        <li
          data-testid={ `${i}-ingredient-name-and-measure` }
          key={ `${index}-list-item` }
        >
          {`${ingredient} - ${measure}`}
        </li>
      ))}
    </ul>
  );
}
function renderProgressList({ list, handleChange }) {
  return (
    <ul>
      {list.map(({ ingredient, measure, index }, i) => (
        <li
          data-testid={ `${i}-ingredient-step` }
          key={ `${index}-list-item` }
        >
          <input
            checked={ list.find((item) => item.index === index).finished }
            name={ index }
            onChange={ handleChange }
            type="checkbox"
          />
          {`${ingredient} - ${measure}`}
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
  console.log({ ingredients, favorites });
  const out = [...ingredients];
  return out.map((item) => ({
    ...item,
    finished: favorites.includes(item.index),
  }));
};

function Ingredients({ ingredients, inProgress, id, type }) {
  const favorites = useSelector(favoritesByIdSelector(type, id));
  const dispatch = useDispatch();
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

  return (
    <section>
      <h2>Ingredients</h2>
      {inProgress
        ? renderProgressList({ list, handleChange })
        : renderNormalList({ list })}
    </section>
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
};

export default Ingredients;
