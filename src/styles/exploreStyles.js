import styled from 'styled-components';
import { background, primary1, secondary1 } from './theme';

export const ExploreOptionsContainer = styled.div` /* ExploreOptionsContainer */
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  padding-inline: 10px;
`;
export const ExploreOption = styled.div` /* ExploreOption */
  align-items: center;
  background: ${background};
  border-radius: 8px;
  box-shadow: 0 0 5px 0 hsla(0, 0%, 0%, 0.25);
  box-sizing: border-box;
  color: ${primary1};
  display: flex;
  height: 125px;
  justify-content: center;
  padding: 12px;
  transition: color 100ms linear , background 100ms linear;

  &:active {
    background: ${primary1};
    color: ${background};
  }
`;
ExploreOption.Icon = styled.div` /* ExploreOption.Icon */
`;
ExploreOption.Label = styled.span` /* ExploreOption.Label */
  color: inherit;
  font-size: 18px;
  font-weight: 800;
  text-align: center;
`;

export const ExploreByAreaContainer = styled.div` /* ExploreByAreaContainer */
  padding: 5px;
`;

export const SelectByArea = styled.select` /* SelectByArea */
  background: ${background};
  border: 2px solid ${primary1};
  border-radius: 6px;
  height: 40px;
  width: 100%;

  &:active {
    outline: unset;
  }
`;
