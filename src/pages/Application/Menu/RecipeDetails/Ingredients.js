import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Ingredients({ ingredients }) {
  const [list, setList] = useState(ingredients);

  const handleChange = ({ target: { name } }) => {
    const itemIndex = list.findIndex(({ index }) => index === Number(name));
    const copyState = [...list];
    copyState[itemIndex].finished = !copyState[itemIndex].finished;
    setList([...list]);
  };

  const valueByIndex = (index) => list.find((item) => item.index === index).finished;

  return (
    <section>
      <h2>Ingredients</h2>
      <ul>
        {list.map(({ ingredient, measure, index }, i) => (
          <li
            data-testid={ `${i}-ingredient-name-and-measure` }
            key={ `${index}-list-item` }
          >
            {`${ingredient} - ${measure}`}
            <input
              value={ valueByIndex(index) }
              name={ index }
              onChange={ handleChange }
              type="checkbox"
            />
          </li>
        ))}
      </ul>
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
};

export default Ingredients;
