import React, { FC } from 'react';
import styled from 'styled-components';
import reduxIcon from '../assets/redux-icon.png';
import reactIcon from '../assets/react-icon.png';
import tsIcon from '../assets/ts-icon.png';
import styledIcon from '../assets/styled-icon.png';
import es6Icon from '../assets/es6-icon.png';
import cssIcon from '../assets/css-icon.png';

const TitleContainer = styled.section`
  --max-view: calc(100vh - 50px);
  display: flex;
  justify-content: space-evenly;
  flex-flow: nowrap column;
  align-items: center;
  text-align: center;

  h2 {
    margin: 1rem 0 0 0;
  }

  .title-container {
    display: flex;
    justify-content: center;
    flex-flow: nowrap column;
    align-items: center;
    height: var(--max-view);
    text-align: center;
  }

  .main-title {
    z-index: 20;  
    background: -webkit-linear-gradient(355deg,#24b3e2,#519e78);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4rem;
  }

  .developer {
    height: var(--max-view);
    .dev-container {
      display: flex;
      margin-top: 50px;
      flex-flow: nowrap column;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
    }
  }

  .technologies {
    height: var(--max-view);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap row;
    font-size: 1.25rem;

    .technology {
      display: flex;
      margin: 1rem;
      flex-flow: nowrap column;
      align-items: center;

      span {
        margin-block: 0.5rem;
        font-weight: 500;
      }

      .img-container {
        height: 75px;
        img {
          height: 100%;
        }        
      }
    }
  }
`;

const Home: FC = () => {
  const icon = (str: string, img: string) => (
    <div className="technology">
      <span>{str}</span>
      <div className="img-container">
        <img src={img} alt={str} />
      </div>
    </div>
  );

  return (
    <TitleContainer>
      <div className="title-container">
        <h1 className="main-title">FRONTEND STORE</h1>
      </div>
      <div>
        <h2>Ferramentas Usadas no Projeto</h2>
        <div className="technologies">
          {icon('Redux', reduxIcon)}
          {icon('React', reactIcon)}
          {icon('Typescript', tsIcon)}
          {icon('StyledComponents', styledIcon)}
          {icon('EcmaScript 6', es6Icon)}
          {icon('CSS', cssIcon)}
        </div>
      </div>
      <div className="developer">
        <h2>Contato</h2>
        <div className="dev-container">
          <p>
            <b>Github:</b>
            {' '}
            github.com/MuriloGon
          </p>
          <p>
            <b>linkedin:</b>
            {' '}
            linkedin.com/in/MuriloGon
          </p>
          <p>
            <b>Email:</b>
            {' '}
            murilogoncalvesdev@gmail.com
          </p>
          <p><i>Developed by: Murilo Gonçalves</i></p>
        </div>
      </div>

    </TitleContainer>
  );
};

export default Home;
