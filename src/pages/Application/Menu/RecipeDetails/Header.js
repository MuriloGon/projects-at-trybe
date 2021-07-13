import React from 'react';
import PropTypes from 'prop-types';
import FavoriteRecipeButton from '../../../../Components/FavoriteRecipeButton';
import ShareButton from '../../../../Components/ShareButton';

function Header({ imgSrc, category, title, favoriteData }) {
  const url = window.location.href;
  const regex = /[\s\S]+[comidas|bebidas]\/[\d]+/;
  const toCopy = url.match(regex)[0];

  return (
    <header>
      <div>
        <img data-testid="recipe-photo" src={ imgSrc } alt={ title } />
      </div>
      <div>
        <h1 data-testid="recipe-title">{ title }</h1>
        <h3 data-testid="recipe-category">{ category }</h3>

        <ShareButton msg="Link copiado!" toCopy={ toCopy } testid="share-btn" />

        <FavoriteRecipeButton
          favoriteData={ favoriteData }
          testid="favorite-btn"
        />

      </div>
    </header>
  );
}

Header.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  favoriteData: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Header;
