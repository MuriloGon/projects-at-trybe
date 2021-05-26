import styled from 'styled-components';
import { common } from '../../styles/globalStyles';
import searchIcon from '../../assets/search-icon.svg';

const NavContainer = styled.header`
  width: 100%;
  background: hsl(110deg, 50%, 75%);
  display: flex;
`;

const NavContent = styled.nav`
  margin: 0 auto;
  max-width: ${common.maxWidth};
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  flex: 1;
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

`;

const NavItem = styled.li`
`;

export {
  NavContainer, NavContent, NavList, NavItem,
};

/* Search form */
export const Form = styled.form`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;

  input {
    font-size: 1.25rem;
    width: 100%;
    padding: 0.75rem 45px 0.75rem 0.75rem;
    box-sizing: border-box;
    border: unset;
    :focus {
      outline: none;
    }
  }

  #search-btn {
    background: url(${searchIcon});
    width: 30px;
    height: 30px;
    position: absolute;
    right: 5px;
    top: 7px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    border: none;
    transition: filter 0.15s ease;

    :hover {
      cursor: pointer;
      transform-origin: center center;
      filter: drop-shadow(0px 2px 1.25px hsl(0deg, 0%, 0%, 30%));
    }
  }
`;
