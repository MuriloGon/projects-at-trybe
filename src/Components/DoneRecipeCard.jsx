import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';

const DoneRecipeCard = ({ data, index }) => {
  const { id, type, area, category, alcoholicOrNot,
    name, image, tags, doneDate } = data;

  const url = type === 'comida' ? `/comidas/${id}` : `/bebidas/${id}`;
  const host = location.hostname;

  return (
    <div>
      <Link to={ url }>
        <div>
          <img
            data-testid={ `${index}-horizontal-image` }
            src={ image }
            alt={ name }
          />

          {type === 'comidas' ? <p>{area}</p> : null}

          <h2
            data-testid={ `${index}-horizontal-top-text` }
          >
            { category }
          </h2>

          {!alcoholicOrNot ? null : <p>{alcoholicOrNot}</p>}

          <h1
            data-testid={ `${index}-horizontal-name` }
          >
            { name }
          </h1>

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

        </div>
      </Link>
      <div>

        <ShareButton
          msg="Link copiado!"
          toCopy={ host + url }
          testid={ `${index}-horizontal-share-btn` }
        />

      </div>
    </div>
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
