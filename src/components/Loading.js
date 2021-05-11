import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Container } from '../styles/utility';

import darkImage from '../assets/dark-loading.gif';
import lightImage from '../assets/light-loading.gif';

const SubContainer = styled.div`align-items: center;
  display: flex;
  flex-flow: nowrap column;

  .loading-message { color: ${({ secondary }) => secondary}; }

  img { height: 300px; }
`;

const Loading = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <SubContainer { ...theme }>
        <img
          src={ theme.theme === 'dark' ? darkImage : lightImage }
          alt="loading"
        />
        <div className="loading-message">Carregando...</div>
      </SubContainer>
    </Container>
  );
};

export default Loading;
