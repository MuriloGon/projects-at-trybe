import styled from 'styled-components';
import { footerHeight, headerHeight,
  primary1, background } from './theme';

export const MenuWrapper = styled.div` /* Container */
  display: grid;
  grid-template-rows: ${headerHeight} 10fr ${footerHeight};
  height: 100%;
`;

MenuWrapper.Main = styled.main`/* Container main */
  flex: 1;
  overflow-y: scroll;
`;

export const Header = styled.header`/* Header */
  align-items: center;
  background: ${background};
  box-shadow: 0 0 10px 0 hsla(0deg 0% 0% / 15%);
  color: ${primary1};
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  height: ${headerHeight};
  place-content: center;
  width: 100%;

  & > * {
    margin: 0 auto;
  }

  & svg {
    width: 40px;
  }

  & a {
    display: flex;
    place-content: center;
  }
`;

Header.Title = styled.h1`/* Header Title */
  color: ${primary1};
  font-size: 22px;
`;

export const Footer = styled.footer`/* Footer */
  align-items: center;
  background: ${background};
  display: flex;
  height: ${footerHeight};
  justify-content: space-evenly;
  width: 100vw;
`;
