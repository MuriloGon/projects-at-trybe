import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

function MenuCard({ CardTestId, TitleTestId, imgTestId, title, imgUrl, alt, key }) {
  const { path } = useRouteMatch();
  return (
    <Link to={ `/${path}/${key}` }>
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
  key: PropTypes.string.isRequired,
};

export default MenuCard;
