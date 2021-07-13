import styled from 'styled-components';
import { primary1, primary2, headerHeight } from './theme';

export const CardContainer = styled.section`/* Card */
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 6px 2px hsl(0deg 0% 0% / 15%);
  height: 250px;
  max-width: 100%;
  overflow: hidden;
`;

CardContainer.Image = styled.div`/* ImgContainer */
  height: 180px;
  object-fit: cover;
  overflow: hidden;
  place-content: center;

  img {
    height: 100%;
    margin: 0 auto;
  }
`;

CardContainer.Title = styled.h2`/* Card Title */
  color: ${primary1};
  font-size: 16px;
`;

CardContainer.Subtitle = styled.h3`/* Card Title */
  color: ${primary2};
  font-size: 16px;
`;

CardContainer.Tags = styled.div`/* Card Tags */
`;

export const ListCardContainer = styled.section`/* List Card Container */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const CategoriesContainer = styled.div`/* CategoriesContainer Btns  */
  align-items: center;
  display: flex;
  height: 50px;
  position: fixed;
  top: ${headerHeight};
  width: 100%;

  & .bg-blur-categories {
    backdrop-filter: blur(12px) saturate(4);
    background: hsla(117deg, 51%, 60%, 25%);
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
  position: fixed;
  width: 100%;
  z-index: 2;

  & > * {
    height: 30px;
    margin-left: 20px;
    min-width: fit-content;
  }
`;
