import styled from 'styled-components';
import { primary1 } from './theme';

export const Input = styled.input`/* Login Form */
  border: 2px solid ${primary1};
  border-radius: 10px;
  box-sizing: border-box;
  color: ${primary1};
  flex-flow: nowrap column;
  height: 40px;
  letter-spacing: calc(16px * 0.05);
  padding-inline: 10px;
  width: 100%;
`;

export const GradientButton = styled.button`/* button */
  background: linear-gradient(to right, hsl(117deg, 48%, 70%), hsl(194deg, 60%, 60%));
  border: unset;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  height: 40px;
  width: 125px;

  &[ disabled ] {
    background: linear-gradient(to right, hsl(117deg, 10%, 70%), hsl(194deg, 10%, 60%));
    color: hsl(0deg, 0%, 95%);
  }
`;

const variant1 = ({ variant, theme }) => (variant ? theme[`${variant}1`] : '');
const variant2 = ({ variant, theme }) => (variant ? theme[`${variant}2`] : '');
const borderSizeCb = ({ borderSize }) => (borderSize ? `${borderSize}px` : '2px');
export const CategoryButton = styled.button`/* Button */
  background: ${variant2};
  border: ${borderSizeCb} solid ${variant1};
  border-radius: 6px;
  box-sizing: border-box;
  color: ${variant1};
  font-weight: 600;
  height: 38px;
  padding: 8px;
`;
