import React from 'react';
import { Chart } from 'react-google-charts';
import { Link } from 'react-router-dom';
import { Button, FeedbackContainer, MainFeedbackContainer } from './styles';

const correctAnswers = 8;
const wrongAnswers = 2;
const score = 38;

const msg = () => {
  const assertions = 3;
  if (correctAnswers < assertions) { return 'Podia ser melhor...'; }
  return 'Mandou bem!';
};

export default function index() {
  return (
    <MainFeedbackContainer>
      <FeedbackContainer>
        <div>
          <p data-testid="feedback-text" className="feedback">
            Você acertou um total de
            <span data-testid="feedback-total-question">{` ${correctAnswers} `}</span>
            perguntas e fez
            <span data-testid="feedback-total-score">{` ${score} `}</span>
            pontos
          </p>
          <h3 className="title">{msg()}</h3>
        </div>
        <Chart
          width="500px"
          height="300px"
          chartType="PieChart"
          loader={ <div>Loading Chart</div> }
          data={ [['Chart', 'results'], ['Acertos', correctAnswers],
            ['Erros', wrongAnswers]] }
          options={ { is3D: true } }
          rootProps={ { 'data-testid': '2' } }
        />
        <div className="div-buttons">
          <Link to="/ranking">
            <Button
              className="ranking-btn"
              data-testid="btn-ranking"
              type="button"
            >
              Ver Ranking
            </Button>
          </Link>
          <Link to="/login">
            <Button
              data-testid="btn-play-again"
              className="playagain-btn"
              type="button"
            >
              Jogar Novamente
            </Button>
          </Link>
        </div>
      </FeedbackContainer>
    </MainFeedbackContainer>
  );
}
