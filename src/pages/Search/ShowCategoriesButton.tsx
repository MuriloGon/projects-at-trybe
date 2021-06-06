/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { FC } from 'react';
import { IoList } from 'react-icons/io5';

import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  left: 2.5vh;
  bottom: 2.5vh;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  background: hsl(190deg,50%,50%);
  z-index: 9999;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  user-select: none;
  transition: transform 0.15s ease, opacity 0.15s linear;

  :hover {
    background-color: hsl(190deg,50%,30%);
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

interface Props {
  categoriesRef: HTMLElement | null
}

const ShowCategoriesButton: FC<Props> = ({ categoriesRef }) => {
  const handleClick = () => {
    categoriesRef?.classList.toggle('menu-open');
  };

  return (
    <Div
      onClick={handleClick}
    >
      <IoList />
    </Div>
  );
};

export default ShowCategoriesButton;
