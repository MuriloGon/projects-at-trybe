import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const FavoriteRecipesContainer = styled.div` /* FavoriteRecipesContainer */
  display: grid;
  grid-template-columns: 1fr;
  padding-inline: 10px;
  row-gap: 5px;
`;

export const FavoriteRecipeCardStyle = styled.div` /* FavoriteRecipeCard */
  border-radius: 8px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  height: 200px;
  margin-top: 10px;
  overflow: hidden;
`;

FavoriteRecipeCardStyle.Image = styled.div` /* FavoriteRecipeCardStyle.Image */
  width: 200px;

  img {
    height: 100%;
    width: auto;
  }
`;

FavoriteRecipeCardStyle.Content = styled.div` /* FavoriteRecipeCardStyle.Content */
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-flow: nowrap column;
  justify-content: space-between;
  padding: 20px;
`;
