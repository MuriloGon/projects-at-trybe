import styled from 'styled-components';
import { primary1, primary2 } from './theme';

export const RecipeDetailContainer = styled.div`/* RecipeDetailContainer */
  padding-bottom: 50px;

  & .floating-button {
    align-items: center;
    background: white;
    bottom: 0;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    height: 50px;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 100;

    & button {
      width: max-content;
      z-index: 100;
    }
  }
`;

RecipeDetailContainer.Content = styled.div` /* RecipeDetailContainer.Content  */
  padding: 5px;

  button {
    background: unset;
    border: unset;
  }

  h2 {
    color: ${primary1};
    font-size: 20px;
    margin-block: 5px;
  }

  h3 {
    color: ${primary2};
    font-size: 18px;
    margin-block: 5px;
  }

  p {
    font-size: 17px;
    letter-spacing: 1px;
    line-height: 1.5;
    padding: 5px;
    text-align: justify;
  }

  & > * {
    margin-top: 20px;
  }
`;

export const RecipeHeaderContainer = styled.div` /* teste */
`;

RecipeHeaderContainer.Image = styled.div` /* RecipeHeaderContainer Image */
  img {
    width: 100%;
  }
`;

RecipeHeaderContainer.Content = styled.div` /* Content */
  display: grid;
  grid-template-columns: 4fr 1fr;

  .buttons {
    display: flex;
  }

  h1 {
    color: ${primary1};
    font-size: 28px;
  }

  h3 {
    color: ${primary2};
    font-size: 18px;
  }
`;

export const RecipeIngredientContainer = styled.section` /* RecipeIngredientContainer */
  list-style-type: circle;

  ul {
    list-style-type: none;
    padding-left: 15px;
  }

  ul > li {
    padding-block: 6px;
  }

  ul input {
    margin-right: 10px;
  }

  ul span, ul label {
    font-size: 18px;
  }
`;
