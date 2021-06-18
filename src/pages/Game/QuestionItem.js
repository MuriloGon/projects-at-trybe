import React from 'react';
import PropTypes from 'prop-types';
import { RadioContainer } from './styles';

const QuestionItem = ({ text, index, showAnswer, isCorrect, disabled, onClick }) => {
  const msg = isCorrect ? 'correct' : 'wrong';

  return (
    <RadioContainer
      data-testid={ isCorrect ? 'correct-answer' : `wrong-answer-${index}` }
      className={ showAnswer ? msg : '' }
      disabled={ !disabled }
      type="button"
    >
      <input
        type="radio"
        name="question"
        id={ index }
        value={ isCorrect }
        onClick={ () => {
          onClick(isCorrect);
        } }
        disabled={ !disabled }
      />
      <label htmlFor={ index }>{text}</label>
      <span className="checkmark" />
    </RadioContainer>
  );
};

QuestionItem.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  showAnswer: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default QuestionItem;
