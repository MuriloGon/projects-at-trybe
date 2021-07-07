import React from 'react';
import PropTypes from 'prop-types';

function MenuCard({ CardTestId, TitleTestId, imgTestId, title, imgUrl, alt }) {
  return (
    <div data-testid={ CardTestId } className="class-meal-card">
      <img data-testid={ imgTestId } src={ imgUrl } alt={ alt } />
      <h2 data-testid={ TitleTestId }>{ title }</h2>
    </div>
  );
}

MenuCard.propTypes = {
  CardTestId: PropTypes.string.isRequired,
  TitleTestId: PropTypes.string.isRequired,
  imgTestId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default MenuCard;
