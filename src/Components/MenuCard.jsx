import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CardContainer as Card } from '../styles/menuListStyles';

function MenuCard({ CardTestId, TitleTestId, imgTestId,
  title, imgUrl, alt, type, itemId }) {
  const toObj = {
    drinks: `/bebidas/${itemId}`,
    meals: `/comidas/${itemId}`,

  };
  return (
    <Card data-testid={ CardTestId }>
      <Link to={ toObj[type] }>
        <Card.Image>
          <img data-testid={ imgTestId } src={ imgUrl } alt={ alt } />
        </Card.Image>
        <Card.Title data-testid={ TitleTestId }>
          { title }
        </Card.Title>
        <Card.Subtitle data-testid={ TitleTestId }>
          { title }
        </Card.Subtitle>
        <Card.Tags>
          Tags
        </Card.Tags>
      </Link>
    </Card>

  );
}

MenuCard.propTypes = {
  CardTestId: PropTypes.string.isRequired,
  TitleTestId: PropTypes.string.isRequired,
  imgTestId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default MenuCard;
