import styled from 'styled-components';

const primary1 = ({ theme }) => theme.primary1;
const primary2 = ({ theme }) => theme.primary2;

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
