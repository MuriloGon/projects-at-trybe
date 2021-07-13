import styled from 'styled-components';

const footerHeight = (theme) => theme['footer-heigth'];
const headerHeight = (theme) => theme['header-heigth'];

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
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color1};
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  height: ${({ theme }) => theme['header-height']};
  width: 100%;

  & > * {
    margin: 0 auto;
  }
`;

export const Footer = styled.footer`/* Footer */
  align-items: center;
  background: ${({ theme: { background } }) => background};
  display: flex;
  height: ${({ theme }) => theme['footer-height']};
  justify-content: space-evenly;
  width: 100vw;
`;
