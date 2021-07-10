import styled from 'styled-components';

export const MenuWrapper = styled.div` /* Container */
  display: flex;
  flex-flow: nowrap column;
  height: 100vh;
  width: 100vw;
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
