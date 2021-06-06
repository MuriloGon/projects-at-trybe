import styled from 'styled-components';
import styles, { common } from '../../styles/globalStyles';

const NavContainer = styled.header`
  width: 100%;
  background: ${styles.default.primary};
  display: flex;
  height: 50px;
  position: sticky;
  top:0;
  z-index: 1000;
`;

const NavContent = styled.nav`
  margin: 0 auto;
  max-width: ${common.maxWidth};
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  flex: 1;

  a, a:hover, a:focus, a:active {
     text-decoration: none;
     color: white;
     font-weight: 500;
     font-size: 1.25rem;
  }
  a:hover {
    color: pink;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex: 1;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;

  a {
    height: 100%;
    display: flex;
    align-items: center;
  }

  #search-item {
    display: flex;
    padding-block: 0.5rem;
    max-width: 800px;
    flex: 1;
  }

  .cart-items-link {
    position: relative;

    & .qty-indicator {
      display: inline-block;
      width: 20px;
      height: 20px;
      position: absolute;
      right: -45%;
      top: 0%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.05rem;
      background-color: hsl(60deg 100% 60%);
      color: hsl(0deg 0% 20%);
      padding: 0.25rem;
    }
  }
`;

const NavItem = styled.li`
`;

export {
  NavContainer, NavContent, NavList, NavItem,
};
