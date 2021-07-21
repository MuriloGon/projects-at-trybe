import React from 'react';
import { LoadingContainer, Persona } from '../styles/loadingStyles';
import { ReactComponent as Main } from '../images/persona/main.svg';
import { ReactComponent as Left } from '../images/persona/left.svg';
import { ReactComponent as Right } from '../images/persona/right.svg';

function Loading() {
  return (
    <LoadingContainer>
      <Persona>
        <Left className="left" />
        <Main className="main" />
        <Right className="right" />
      </Persona>
      <h2>
        Carregando
      </h2>
    </LoadingContainer>
  );
}

export default Loading;
