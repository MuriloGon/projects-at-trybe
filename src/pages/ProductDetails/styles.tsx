import styled from 'styled-components';

import { Main as GenericMain } from '../../styles/Container';

export const Main = styled(GenericMain)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 
    'image price'
    'technical price'
    'comment comment';


  @media screen and (max-width: 1024px) {
    & {
      display: block;
      padding: 0.5rem;
    }
  }

  .prices {
    padding:1rem;

    h3 {
      margin: 0.5rem 0;
      font-size: 1rem;
    }

    .product-id {
      background-color: #d4d4d4;
      color: #000000;
      padding: 0.25rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      display: inline-block;
      margin-block: 0.2rem;
    }
    .product-title {
      margin: 0;
      font-size: 1.1rem;
      text-transform: uppercase;
      line-height: 1.5;
    }

    .price-presentation {
      margin-block: 1rem;

      .old-price {
        font-size: 1.5rem;
        display: block;
        text-decoration: line-through;
        color: #b9b9b9;
      }

      .price-value {
        display: block;
        font-size: 2.25rem;
      }
    }


    .warnings {
      & > * {
        margin-left: 0.25rem;
      }
    }

    .sellerInfo {

      .seller-location {
        margin: 0.25rem 0;
      }

      .key-term {
        font-weight: 500;
        display: inline-block;
        width: 65px;
      }
    }

    .product-info {
      margin: 0.5rem 0;
    }

    .infos {
      display: flex;
      margin: 0;
      flex-flow: nowrap column;
    }

    @media screen and (max-width: 1024px) {
      & {
        margin-top: 1.5rem;
      }

      .infos {
        display: flex;
        flex-flow: nowrap row;

        & > * {
          margin: 0 1rem 0 0;
        }
      }
    }

    .add-to-cart {
      margin-top: 1rem;
      user-select: none;

      .item-price {
        display: flex;
        justify-content: flex-start;
        flex-flow: wrap row;
        align-items: center;
        font-size: 1.5rem;

        &> * {
          margin-block: 0.25rem;
        }

        & .action-button {
          --side: 30px;
          margin-inline: 1rem;
          box-sizing: border-box;
          padding: 0.15rem;
          width: var(--side);
          height: var(--side);
          border-radius: 50%;
          background-color: hsl(190deg, 50%, 50%);
          color: white;
          cursor: pointer;

          &:hover {
            background-color: hsl(190deg, 50%, 30%);
          }
        }

        & .add-cart-btn {
          height: 30px;
          border: none;
          cursor: pointer;
          box-sizing: border-box;
          background: hsl(120, 60%, 40%);
          color: white;font-weight: 700;
          font-size: 1.05rem;
          border-radius: 8px;

          &:hover {
            background: hsl(120, 60%, 30%);
          }
        }
      }
    }
    .item-on-cart {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.15rem;

      & .remove-item-btn {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        background-color: hsl(0, 80%, 50%);
        color: white;

        &:hover {
          background-color: hsl(0, 80%, 30%);
          cursor: pointer;
        }
      }
    }
  }

`;

export const ImgContainer = styled.div`
  grid-area: image;
  background: white;

  .swiper-wrapper {
    display: flex;
    height: 500px;
    align-items: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-container {
    width: 480px;
  }

  @media screen and (min-width: 640px) {
    .swiper-container {
      width: 640px;
    }
  }

  @media screen and (min-width: 768px) {
    .swiper-container {
      width: 768px;
    }
  }
`;

export const PriceContainer = styled.div`
  grid-area: price;
  position: relative;

  & h1 { margin: 0; }

  .prices {
    min-width: 200px;
    background: white;
    position: sticky;
    top: 50px;
  }
`;

export const TechnicalSummary = styled.div`
  grid-area: technical;
  grid-row-gap: 1rem;

  table {
    border-spacing: 0px;
    table-layout: fixed;
    width: 100%;
    background-color: white;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    word-wrap: break-word;
  }

  th:nth-child(2) {
    font-weight: normal;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }   
`;

export const Button = styled.button`
  
`;

export const Comments = styled.section`
  grid-area: comment; 
  margin: 1rem 0 0 0;
  h2 {
    margin: 1rem 0;
  }
`;
