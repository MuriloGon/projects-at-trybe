import styled from 'styled-components';
import { Main as GenericMain } from '../../styles/Container';
import styles from '../../styles/globalStyles';
import searchIcon from '../../assets/search-icon.svg';

/* Main Container */
export const Main = styled(GenericMain)`
  display: flex;
`;

/* Sidebar */
export const SideBar = styled.aside`
  min-width: 300px;
  display: flex;
  justify-content: center;

.radio-btn {
  background-color: ${styles.default.primaryLight};
  min-width: 250px;
  padding: 0.5rem;
  margin: 0.25rem 0;
  border-radius: 0.25rem;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}

.radio-selected {
  background-color: ${styles.default.primary};
  color: white;
  transition: background 150ms ease-in-out;
  font-weight: 600;
}

.icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-25%, -50%);
  height: 80%;
  width: auto;
}
`;

export const Categorylist = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CategorylistItem = styled.li`
  display: flex;
  user-select: none;
  align-items: center;
  padding: 0.25rem;
  label { flex: 1; }
`;

/* Content */
export const Content = styled.section`
  flex: 1;
`;

/* Product List */
export const ProdList = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  gap: 10px;
`;

/* Product Card */
export const Product = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-flow: nowrap column;
  box-shadow: 0px 2px 6px 0 rgb(0 0 0 / 15%);
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.15s linear;
  
  &:hover {
    box-shadow: 0px 32px 24px 2px rgb(0 0 0 / 20%);
    z-index: 10;
  }

@keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
}

  .animated-background {
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    position: relative;
  }

  .ph-price {
    height: 40px;
  }

  .ph-description {
    margin-top: 20px;
    height: 100px;
  }

`;

export const ProductImage = styled.div`
  height: 50%;
  width: auto;
  display: flex;
  align-items: center;
  background-color: white;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: solid 1px #e4e3e3;
  overflow: hidden;

  & img{
    width: auto;
    height: 100%;
  }
`;

export const ProductContent = styled.div`
  --font-size: 1.5em;
  flex: 1;
  padding: 1em;
  display: flex;
  flex-flow: nowrap column;
  background: hsl(0deg 0% 98%);

  .stylizedPrice {
    font-size: var(--font-size);
    .decimalPrice {
      font-size: calc(var(--font-size) * 0.5);
      display: inline-block;
      transform: translateY(-50%)
    }
  }

  .discount {
    font-size: calc(var(--font-size) * 0.55);
    color: hsl(100deg, 60%, 40%);
    font-weight: 500;
    margin-left: 0.5em
  }

  .oldPrice, .oldPrice > * {
    --font-size: 0.9em;
    text-decoration: line-through;
    color: #818181;
  }

  .installments {
    font-size: 0.95em;
    margin: 0 0 0.5rem 0;
    display: flex;
    .installments-styled {
      margin: 0 0.15em 0 0.15em ;
      font-size: 1em;
      color: hsl(100deg, 60%, 40%);
    }
    .installments-no-styled {
      margin: 0 0.15em 0 0.15em ;
      font-size: 1em;
    }
  }

  .discount-warn {
    background-color: #d9e7fa;
    color: #3483fa;
    display: inline-block;
    margin: 0.5em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    font-weight: 600;
    align-self: baseline;
  }

  .free-shipping {
    color: hsl(100deg, 60%, 40%);
    padding: 0.4em 0;
    font-weight: 400;
  }

  .product-title {
    display: flex;
    margin-top: 0.5rem;
    flex: 1;
    flex-flow: nowrap column;
    justify-content: flex-start;
    line-height: 1.35;
  }
`;

/* Search form */
export const Form = styled.form`
  display: block;
  margin: auto;
  position: relative;
  box-sizing: border-box;
  width: 95%;
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
