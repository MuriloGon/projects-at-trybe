import React, { useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPlayerScore } from '../../helpers/playerLocalStoreFunctions';
import { Button, FeedbackContainer, MainFeedbackContainer } from './styles';

const msg = (correctAnswers) => {
  const assertions = 3;
  if (correctAnswers < assertions) { return 'Podia ser melhor...'; }
  return 'Mandou bem!';
};

const renderButtons = () => (
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
);

export default function Game() {
  const { game: { score, assertions, questions },
    login: { userName: name, avatar: picture },
  } = useSelector((st) => st);
  const correctAnswers = assertions;
  const wrongAnswers = questions.length - correctAnswers;
  useEffect(() => {
    const obj = {
      name,
      score,
      picture };
    addPlayerScore(obj);
  }, []);
  return (
    <MainFeedbackContainer>
      <FeedbackContainer>
        <div>
          <p>
            Você acertou um total de
            <span data-testid="feedback-total-question">{` ${correctAnswers} `}</span>
            perguntas e fez
            <span data-testid="feedback-total-score">{` ${score} `}</span>
            pontos
          </p>
          <p data-testid="feedback-text" className="title feedback">
            {msg(correctAnswers)}
          </p>
        </div>
        <Chart
          width="500px"
          height="300px"
          chartType="PieChart"
          loader={ <div>Loading Chart</div> }
          data={ [['Chart', 'results'], ['Acertos', correctAnswers],
            ['Erros', wrongAnswers]] }
          rootProps={ { 'data-testid': '2' } }
        />
        {renderButtons()}
      </FeedbackContainer>
    </MainFeedbackContainer>
  );
}
