import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BsTerminal } from 'react-icons/bs';
import { fetchQuestions } from '../../api/trivia';
import shuffle from '../../helpers/arrayFunctions';
import { Main, Question, QuestionForm, QuestionHead, Radio, RadioContainer } from './styles';

const headerStyles = {
  height: '75px',
  width: '100%',
  background: 'blue',
  marginBottom: '20px',
};

const data = {
  category: 'Categoria1',
  question: 'ipsulun lorem 2 ipsulun lorem 2ipsulun lorem 2ipsulun lorem 2ipsulun lorem 2 ipsulun lorem 2ipsulun lorem 2ipsulun lorem 2ipsulun lorem 2 ipsulun lorem 2ipsulun lorem 2ipsulun lorem 2ipsulun lorem 2 ipsulun lorem 2ipsulun lorem 2ipsulun lorem 2ipsulun lorem 2 ipsulun lorem 2ipsulun lorem 2ipsulun lorem 2',
  type: 'multiple',
  correct_answer: 'resposta correta',
  wrong_answers: ['errada1', 'errada2', 'errada3'],
};

const QuestionItem = ({ text, index, showAnswer, isCorrect }) => {
  const msg = isCorrect ? 'correct' : 'wrong';
  return (
    <RadioContainer className={ showAnswer ? msg : '' }>
      <input
        checked
        type="radio"
        name="question"
        id={ index }
        value={ isCorrect }
        data-testid={ isCorrect ? 'correct-answer' : `wrong-answer-${index}` }
      />
      <label htmlFor={ index }>{text}</label>
      <span className="checkmark" />
    </RadioContainer>
  );
};

const questionsMap = (correctAnswer, incorrectAnswers) => {
  const correctAnsObj = { text: correctAnswer, isCorrect: true, index: -1 };
  const incorrenctAnsMap = incorrectAnswers.map(
    (text, index) => ({ text, isCorrect: false, index }),
  );
  return shuffle([correctAnsObj, ...incorrenctAnsMap]);
};

// eslint-disable-next-line react/no-multi-comp
const Game = () => {
  const [{
    category, question, correct_answer: ca, wrong_answers: wa,
  }, setQuestionsData] = useState(data);
  const [showAnswer, setShowAnswer] = useState(true);
  // const token = useSelector((st) => st.game.token);
  // useEffect(() => {
  //   fetchQuestions(token).then(setQuestionsData);
  // }, []);

  const questions = questionsMap(ca, wa);

  return (
    <>
      <header style={ headerStyles }>oi</header>
      <Main>
        <Question>
          <QuestionHead>
            <h2
              className="question-category"
              data-testid="question-category"
            >
              {category}
            </h2>
            <hr className="separation-line" />
            <p className="question-txt" data-testid="question-text">{question}</p>
          </QuestionHead>
          <QuestionForm>
            {
              questions.map((question, i) => (
                <QuestionItem
                  key={ `item${i}` }
                  showAnswer={ showAnswer }
                  { ...question }
                />))
            }
          </QuestionForm>
        </Question>
      </Main>
    </>
  );
};

export default Game;
