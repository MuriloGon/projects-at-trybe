import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { formatImageSrc } from '../../../../services/apisMaps';
import { saveIngredient } from '../../../../slices/exploreSlice';
import { CardContainer } from '../../../../styles/menuListStyles';

function GenericCardMenu({ name, index, type }) {
  const dispatch = useDispatch();
  const pathname = type === 'meals' ? '/comidas/' : '/bebidas/';

  function handleRedirect() {
    dispatch(saveIngredient({ name, type }));
  }

  return (
    <Link to={ pathname } onClick={ handleRedirect }>
      <CardContainer
        key={ `${name}-${index}` }
        data-testid={ `${index}-ingredient-card` }
      >
        <CardContainer.Content>
          <CardContainer.Title>

            <h2
              data-testid={ `${index}-card-name` }
            >
              {name}
            </h2>
          </CardContainer.Title>
          <CardContainer.Image>

            <img
              data-testid={ `${index}-card-img` }
              src={ formatImageSrc(type)(name) }
              alt={ name }
            />
          </CardContainer.Image>
        </CardContainer.Content>
      </CardContainer>
    </Link>
  );
}

GenericCardMenu.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default GenericCardMenu;
