/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchQuestions } from '../../api/trivia';
import { resetPlayerState, savePlayer } from '../../helpers/playerLocalStoreFunctions';
import { incrementAssertions, setScore } from '../../slices/gameSlice';
import Question from './Question';
import { Main } from './styles';

const Game = () => {
  const [questions, setQuestions] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [allowChoice, setAllowChoice] = useState(true);
  const player = useSelector((st) => st.login);
  const token = useSelector((st) => st.game.token);
  const dispatch = useDispatch();
  const [fireInstance, setFireInstance] = useState(false);

  useEffect(() => {
    fetchQuestions(token).then(setQuestions);
    resetPlayerState(player.userName, player.email);
  }, []);

  useEffect(() => {
    setFireInstance(true);
  }, [fireInstance]);

  const handleClick = (answer, timer, difficulty) => {
    setShowAnswer(true);
    setAllowChoice(false);
    savePlayer({
      answer,
      name: player.userName,
      timer,
      gravatarEmail: player.email,
      difficulty,
      callback: (score) => {
        console.log(score);
        dispatch(setScore(score));
        dispatch(incrementAssertions());
      } });
  };

  if (questions.length <= 0) return null;
  const question = questions[currentQuestionIndex];
  console.log(questions);
  const renderQuestion = (question) => (
    <Question
      showAnswer={ showAnswer }
      allowChoise={ allowChoice }
      handleClick={ handleClick }
      question={ question }
    />
  );
  if (currentQuestionIndex >= questions.length) return <Redirect to="/feedback" />;
  return (
    <Main>
      {fireInstance && renderQuestion(question)}
      <button
        data-testid="btn-next"
        type="button"
        style={ { display: showAnswer ? 'block' : 'none' } }
        onClick={ () => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setShowAnswer(false);
          setAllowChoice(true);
          setFireInstance(false);
        } }
      >
        Próxima
      </button>
    </Main>
  );
};

export default Game;
