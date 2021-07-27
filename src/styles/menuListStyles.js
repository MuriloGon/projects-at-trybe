import styled from 'styled-components';
import { primary1, primary2, categoryBarHeight } from './theme';

export const CardContainer = styled.section`/* Card */
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 6px 2px hsl(0deg 0% 0% / 15%);
  box-sizing: border-box;
  font-size: 10px;
  max-width: 100%;
  overflow: hidden;
  position: relative;


`;

CardContainer.Content = styled.div`/* Content */
  background: #ffffff76;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;

CardContainer.Image = styled.div`/* ImgContainer */
  align-items: center;
  display: flex;
  object-fit: cover;
  overflow: hidden;
  place-content: center;

  img {
    margin: 0 auto;
    width: 100%;
  }
`;

CardContainer.Title = styled.h2`/* Card Title */
  color: ${primary1};
  font-size: 18px;
  text-align: center;
`;

CardContainer.Subtitle = styled.h3`/* Card Title */
  color: ${primary2};
  font-size: 1.25;
`;

CardContainer.Tags = styled.div`/* Card Tags */
`;

export const ListCardContainer = styled.section`/* List Card Container */
  column-gap: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;

  & > * {
    margin-bottom: 10px;
  }
`;

export const CategoriesContainer = styled.div`/* CategoriesContainer Btns  */
  align-items: center;
  display: flex;
  height: ${categoryBarHeight};
  position: relative;
  width: 100%;

  & .bg-blur-categories {
    backdrop-filter: blur(16px) saturate(4);
    background: hsla(117deg, 51%, 60%, 15%);
    border-radius: 6px;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }

`;

CategoriesContainer.Wrapper = styled.div`/* Catehories Wrapper */
  align-items: center;
  display: flex;
  height: 50px;
  overflow-x: auto;
  position: relative;
  width: 100%;
  z-index: 2;

  & > * {
    margin-left: 20px;
    min-width: fit-content;
  }
`;
