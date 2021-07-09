import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

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
function renderProgressList({ list, handleChange, valueByIndex }) {
  return (
    <ul>
      {list.map(({ ingredient, measure, index }, i) => (
        <li
          data-testid={ `${i}-ingredient-step` }
          key={ `${index}-list-item` }
        >
          <input
            value={ valueByIndex(index) }
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
  case 'meals': return inProgressRecipes.meals[id];
  case 'drinks': return inProgressRecipes.cocktails[id];
  default: return null;
  }
};
function Ingredients({ ingredients, inProgress, id, type }) {
  const favorites = useSelector(favoritesByIdSelector(type, id));
  const [list, setList] = useState(ingredients);

  const handleChange = ({ target: { name } }) => {
    const itemIndex = list.findIndex(({ index }) => index === Number(name));
    const copyState = [...list];
    copyState[itemIndex].finished = !copyState[itemIndex].finished;
    setList([...list]);
  };

  const valueByIndex = (index) => list.find((item) => item.index === index).finished;
  console.log(inProgress);
  return (
    <section>
      <h2>Ingredients</h2>
      {inProgress
        ? renderProgressList({ list, handleChange, valueByIndex })
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
