import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchQuestions } from '../../api/trivia';
import { resetPlayerState, savePlayer } from '../../helpers/playerLocalStoreFunctions';
import { incrementAssertions, setScore,
  setQuestions as setQuestionsAction, setRedirect } from '../../slices/gameSlice';
import Question from './Question';
import { Main, NextButton } from './styles';

const difficultyObj = {
  hard: 3,
  medium: 2,
  easy: 1,
};
const BASE_SCORE = 10;

const handleClick = (setShowAnswer, setAllowChoice, dispatch) => (
  answer, timer, difficulty,
) => {
  setShowAnswer(true);
  setAllowChoice(false);
  if (answer) {
    dispatch(setScore(BASE_SCORE + (timer * difficultyObj[difficulty])));
    dispatch(incrementAssertions());
  }
};

const renderButton = ({
  showanswer, setCurrentQuestionIndex, currentQuestionIndex,
  setShowAnswer, setAllowChoice, setFireInstance,
}) => (
  showanswer
    ? (
      <NextButton
        data-testid="btn-next"
        type="button"
        onClick={ () => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setShowAnswer(false);
          setAllowChoice(true);
          setFireInstance(false);
        } }
      >
        Próxima
      </NextButton>)
    : null
);

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showanswer, setShowAnswer] = useState(false);
  const [allowChoice, setAllowChoice] = useState(true);
  const reduxSt = useSelector((st) => st);
  const dispatch = useDispatch();
  const [fireInstance, setFireInstance] = useState(false);
  useEffect(() => {
    fetchQuestions(reduxSt.game.token).then(
      (qt) => { setQuestions(qt); dispatch(setQuestionsAction(qt)); },
    );
    resetPlayerState(reduxSt.login.userName, reduxSt.login.email);
    dispatch(setRedirect());
  }, []);
  useEffect(() => {
    savePlayer(reduxSt);
  }, [reduxSt]);
  useEffect(() => { setFireInstance(true); }, [fireInstance]);

  if (questions.length <= 0) return null;
  const question = questions[currentQuestionIndex];
  const renderQuestion = (qt) => (
    <Question
      showAnswer={ showanswer }
      allowChoise={ allowChoice }
      handleClick={ handleClick(setShowAnswer, setAllowChoice, dispatch) }
      question={ qt }
    />
  );
  if (currentQuestionIndex >= questions.length) return <Redirect to="/feedback" />;
  return (
    <Main>
      {fireInstance && renderQuestion(question)}
      {renderButton({
        showanswer,
        setCurrentQuestionIndex,
        currentQuestionIndex,
        setShowAnswer,
        setAllowChoice,
        setFireInstance })}
    </Main>
  );
};

export default Game;
