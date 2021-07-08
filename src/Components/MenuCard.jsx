import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuCard({ CardTestId, TitleTestId, imgTestId,
  title, imgUrl, alt, type, itemId }) {
  const toObj = {
    drinks: `/bebidas/${itemId}`,
    meals: `/comidas/${itemId}`,

  };
  return (
    <Link to={ toObj[type] }>
      <div data-testid={ CardTestId } className="class-meal-card">
        <img data-testid={ imgTestId } src={ imgUrl } alt={ alt } />
        <h2 data-testid={ TitleTestId }>{ title }</h2>
      </div>
    </Link>
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
