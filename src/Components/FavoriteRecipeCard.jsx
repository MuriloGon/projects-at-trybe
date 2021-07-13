import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';
import FavoriteRecipeButton from './FavoriteRecipeButton';

function FavoriteRecipeCard({ data, index }) {
  const { id, type, area, category, alcoholicOrNot,
    name, image } = data;

  const url = type === 'comida' ? `/comidas/${id}` : `/bebidas/${id}`;
  const { origin } = window.location;

  return (
    <section>
      <div>
        <Link to={ url }>
          <img
            width="100%"
            data-testid={ `${index}-horizontal-image` }
            src={ image }
            alt={ name }
          />
        </Link>
        <h2
          data-testid={ `${index}-horizontal-top-text` }
        >
          { `${type === 'comida' ? `${area} - ` : ''}${category}` }
          {!alcoholicOrNot ? null : ` - ${alcoholicOrNot}`}
        </h2>
        <Link to={ url }>
          <h1
            data-testid={ `${index}-horizontal-name` }
          >
            { name }
          </h1>
        </Link>
      </div>
      <div>
        <ShareButton
          msg="Link copiado!"
          toCopy={ origin + url }
          testid={ `${index}-horizontal-share-btn` }
        />
      </div>
      <div>
        <FavoriteRecipeButton
          favoriteData={ data }
          testid={ `${index}-horizontal-favorite-btn` }
        />
      </div>
    </section>
  );
}

FavoriteRecipeCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.string,
    doneDate: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default FavoriteRecipeCard;
