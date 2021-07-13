import React from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import fillHeart from '../images/blackHeartIcon.svg';
import outlineHeart from '../images/whiteHeartIcon.svg';
import { toggleFavorite } from '../slices/favoriteRecipes';

const isFavoriteTest = (idComponent) => (
  ({ favoriteRecipes }) => favoriteRecipes.some(
    ({ id: idStore }) => idComponent === idStore,
  )
);

function FavoriteRecipeButton({ favoriteData, testid }) {
  const isFavorite = useSelector(isFavoriteTest(favoriteData.id));
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const toggleFav = () => {
    if (isFavorite) {
      enqueueSnackbar(
        `${favoriteData.name} - Receita desfavoritada`, { variant: 'error' },
      );
    } else {
      enqueueSnackbar(
        `${favoriteData.name} - Receita favoritada`, { variant: 'success' },
      );
    }
    dispatch(toggleFavorite(favoriteData));
  };

  return (
    <button type="button" onClick={ toggleFav }>
      { isFavorite
        ? <img data-testid={ testid } src={ fillHeart } alt="favorite" />
        : <img data-testid={ testid } src={ outlineHeart } alt="favorite" />}
    </button>
  );
}

FavoriteRecipeButton.propTypes = {
  favoriteData: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  testid: PropTypes.string.isRequired,
};

export default FavoriteRecipeButton;
