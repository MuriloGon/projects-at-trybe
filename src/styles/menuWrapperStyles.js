import styled from 'styled-components';
import { footerHeight, headerHeight,
  primary1, categoryBarHeight, background } from './theme';

export const MenuWrapper = styled.div` /* Container */
  height: 100%;

  & .blur-background {
    backdrop-filter: blur(22px) saturate(4);
    background: hsl(0deg 0% 100% / 80%);
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
`;

MenuWrapper.Main = styled.main`/* Container main */

  /* padding-block: calc(calc(${headerHeight} + ${categoryBarHeight}) + 10px); */
  padding-block: 50px;
`;

export const Header = styled.header`/* Header */
  box-shadow: 0 0 10px 0 hsla(0deg 0% 0% / 15%);
  color: ${primary1};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;


  & svg {
    width: 40px;
  }

  & a {
    display: flex;
    place-content: center;
  }
`;

Header.Wrapper = styled.div` /* Header Wrapper */
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  height: ${headerHeight};
  place-content: center;
  position: relative;
  width: 100%;
  z-index: 10;

  & > * {
    margin: 0 auto;
  }
`;

Header.Title = styled.h1`/* Header Title */
  color: ${primary1};
  font-size: 22px;
`;

export const Footer = styled.footer`/* Footer */
  align-items: flex-end;
  background: none;
  bottom: 0;
  box-shadow: 0 0 12px 0 hsla(0deg 0% 0% / 15%);
  display: flex;
  height: ${footerHeight};
  position: fixed;
  width: 100vw;

  & svg {
    width: 40px;
  }
`;

Footer.Wrapper = styled.div`/* Footer wrapper */
  align-items: center;
  color: ${primary1};
  display: flex;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const SearchBarContainer = styled.div`/* Search Bar Container */
  background: ${background};
  box-shadow: 0 5px 10px 0 hsl(0deg 0% 0% / 15%);
  display: flex;
  flex-flow: nowrap column;
  position: fixed;
  top: 50px;
  width: 100%;
  z-index: 5;
`;

SearchBarContainer.Wrapper = styled.div`/* Search Bar Wrapper */
  align-items: center;
  display: flex;
  flex-flow: nowrap column;
  margin: 12px;

  & > * {
    margin-top: 15px;
  }
`;

SearchBarContainer.Radios = styled.div`/* Radio buttons */
  color: ${primary1};
  display: flex;
  justify-content: space-around;
  width: 100%;

  & input { margin-right: 5px; }
`;
