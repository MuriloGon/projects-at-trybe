import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchQuestions } from '../../api/trivia';
import Question from './Question';
import { Main } from './styles';

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [allowChoice, setAllowChoice] = useState(true);
  const token = useSelector((st) => st.game.token);

  useEffect(() => { fetchQuestions(token).then(setQuestions); }, []);

  const handleClick = () => {
    setShowAnswer(true);
    setAllowChoice(false);
  };

  if (questions.length <= 0) return null;
  const question = questions[currentQuestionIndex];
  return (
    <Main>
      <Question
        showAnswer={ showAnswer }
        allowChoise={ allowChoice }
        handleClick={ handleClick }
        question={ question }
      />
    </Main>
  );
};

export default Game;
