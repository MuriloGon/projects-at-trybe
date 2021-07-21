import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';
import { FavoriteRecipeCardStyle as DRC } from '../styles/favoriteRecipesStyles';

const DoneRecipeCard = ({ data, index }) => {
  const { id, type, area, category, alcoholicOrNot,
    name, image, tags, doneDate } = data;

  const url = type === 'comida' ? `/comidas/${id}` : `/bebidas/${id}`;
  const { origin } = window.location;

  return (
    <DRC>
      <DRC.Image>
        <Link to={ url }>
          <img
            width="100%"
            data-testid={ `${index}-horizontal-image` }
            src={ image }
            alt={ name }
          />
        </Link>
      </DRC.Image>
      <DRC.Content>
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
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          Feita em:
          {' '}
          {doneDate}
        </p>
        {
          tags.slice(0, 2).map((tag) => (
            <span
              data-testid={ `${index}-${tag}-horizontal-tag` }
              key={ `${tag}-${index}` }
            >
              {tag}
            </span>))
        }
        <div>
          <ShareButton
            msg="Link copiado!"
            toCopy={ origin + url }
            testid={ `${index}-horizontal-share-btn` }
          />
        </div>
      </DRC.Content>
    </DRC>
  );
};

DoneRecipeCard.propTypes = {
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

export default DoneRecipeCard;
