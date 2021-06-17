import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';
import shuffle from '../../helpers/arrayFunctions';
import { Question as QuestionContainer, QuestionForm, QuestionHead } from './styles';

const questionsMap = (correctAnswer, incorrectAnswers) => {
  const correctAnsObj = { text: correctAnswer, isCorrect: true, index: -1 };
  const incorrenctAnsMap = incorrectAnswers.map(
    (text, index) => ({ text, isCorrect: false, index }),
  );
  return shuffle([correctAnsObj, ...incorrenctAnsMap]);
};

const Question = ({ question, showAnswer, allowChoise, handleClick }) => {
  const [asserts] = useState(
    questionsMap(question.correct_answer, question.incorrect_answers),
  );

  return (
    <QuestionContainer>
      <QuestionHead>
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
              onClick={ handleClick }
            />))
        }
      </QuestionForm>
    </QuestionContainer>
  );
};

Question.propTypes = {
  question: PropTypes.objectOf({}).isRequired,
  showAnswer: PropTypes.bool.isRequired,
  allowChoise: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Question;
