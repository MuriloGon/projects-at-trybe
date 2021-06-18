/* eslint-disable max-lines-per-function */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';
import Timer from './Timer';
import shuffle from '../../helpers/arrayFunctions';
import { Question as QuestionContainer, QuestionHead, QuestionForm } from './styles';

const questionsMap = (correctAnswer, incorrectAnswers) => {
  const correctAnsObj = { text: correctAnswer, isCorrect: true, index: -1 };
  const incorrenctAnsMap = incorrectAnswers.map(
    (text, index) => ({ text, isCorrect: false, index }),
  );
  return shuffle([correctAnsObj, ...incorrenctAnsMap]);
};

const MAX_TIME = 25;
const TIME_TICK = 1000;

const decrementUnit = (st) => st - 1;

const Question = ({ question, showAnswer, allowChoise, handleClick }) => {
  const [asserts] = useState(
    questionsMap(question.correct_answer, question.incorrect_answers),
  );
  const [time, setTime] = useState(MAX_TIME);
  const timeRef = useRef();

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setTime(decrementUnit);
    }, TIME_TICK);
    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  useEffect(() => {
    if (time <= 0) handleClick(false, 0);
  }, [time]);

  useEffect(() => () => { clearInterval(timeRef.current); }, [allowChoise]);

  return (
    <QuestionContainer>
      <QuestionHead>
        <span className="time-counter">{time}</span>
        <h2
          className="question-category"
          data-testid="question-category"
        >
          {question.category}
        </h2>
        <hr className="separation-line" />
        <p
          className="question-txt"
          data-testid="question-text"
        >
          {question.question}
        </p>
      </QuestionHead>
      <QuestionForm>
        {
          asserts.map((q, i) => (
            <QuestionItem
              key={ `item${i}` }
              showAnswer={ showAnswer }
              disabled={ allowChoise }
              { ...q }
              onClick={ (ans) => { handleClick(ans, time); } }
            />))
        }
      </QuestionForm>
      <Timer time={ Math.round((time / MAX_TIME) * 100) } />
    </QuestionContainer>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  showAnswer: PropTypes.bool.isRequired,
  allowChoise: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Question;
