import React from 'react';
import { RiTimerFill } from 'react-icons/ri';
import styled from 'styled-components';

const IconContainer = styled.section`
  width: 20px;
  color: ${({ theme }) => theme.primary};
  margin-right: 10px;

  .icon-style {
    height: 25px;
    width: auto;
  }
`;

function Icon() {
  return (
    <IconContainer>
      <RiTimerFill className="icon-style" />
    </IconContainer>
  );
}

export default Icon;
