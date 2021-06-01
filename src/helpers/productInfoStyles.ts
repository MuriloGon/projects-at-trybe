import styled from 'styled-components';

export const Installments = styled.p`
  font-size: 0.95em;
  margin: 0 0 0.5rem 0;
  display: flex;

  .styled {
    margin: 0 0.15em 0 0.15em ;
    font-size: 1em;
    color: hsl(100deg, 60%, 40%);
  }
  .no-styled {
    margin: 0 0.15em 0 0.15em ;
    font-size: 1em;
  }
`;

export const DiscountWarn = styled.div`
  background-color: #d9e7fa;
  color: #3483fa;
  display: inline-block;
  margin: 0.5em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  font-weight: 600;
  align-self: baseline;
`;

export const FreeShipping = styled.div`
  color: hsl(100deg, 60%, 40%);
  padding: 0.4em 0;
  font-weight: 400;
`;

export const StyledPrice = styled.span`
  --font-size: 1.5em;
  font-size: var(--font-size);

  .decimalPrice {
    font-size: calc(var(--font-size) * 0.5);
    display: inline-block;
    transform: translateY(-50%)
  }
  .discount {
    font-size: calc(var(--font-size) * 0.55);
    color: hsl(100deg, 60%, 40%);
    font-weight: 500;
    margin-left: 0.5em
  }
`;

export const MercadoPago = styled.div`
  display: inline-block;
  background: hsl(200deg 50% 50%);
  color: white;
  padding: 0.4rem 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  font-weight: 600;
`;
