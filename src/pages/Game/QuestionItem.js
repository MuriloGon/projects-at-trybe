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
      {React.createElement('label', {
        dangerouslySetInnerHTML: { __html: text },
        htmlFor: index,
      })}
      <span className="checkmark" />
    </RadioContainer>
  );
};

// Implementação de proptypes graças ao lucas lara
QuestionItem.propTypes = {
  text: PropTypes.string,
  index: PropTypes.number,
  showAnswer: PropTypes.bool,
  isCorrect: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}.isRequired;

export default QuestionItem;
