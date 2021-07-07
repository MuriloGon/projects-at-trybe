import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { formatImageSrc } from '../../../../services/apisMaps';
import { saveIngredient } from '../../../../slices/exploreSlice';

function GenericCardMenu({ name, index, type }) {
  const dispatch = useDispatch();
  const pathname = type === 'meals' ? '/comidas/' : '/bebidas/';

  function handleRedirect() {
    const category = name;
    dispatch(saveIngredient({ category, type }));
  }

  return (
    <Link to={ pathname } onClick={ handleRedirect }>
      <div
        key={ `${name}-${index}` }
        data-testid={ `${index}-ingredient-card` }
      >
        <h2
          data-testid={ `${index}-card-name` }
        >
          {name}
        </h2>
        <img
          data-testid={ `${index}-card-img` }
          src={ formatImageSrc(type)(name) }
          alt={ name }
        />
      </div>
    </Link>
  );
}

GenericCardMenu.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default GenericCardMenu;
