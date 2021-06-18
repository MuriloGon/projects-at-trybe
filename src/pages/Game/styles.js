import styled from 'styled-components';

export const HeaderContainer = styled.div`/* Header Container */
  align-items: center;
  background-color: ${({ theme: { primary } }) => primary};
  display: flex;
`;

export const HeaderContent = styled.header`/* Header Content */
  align-items: center;
  color: white;
  display: flex;
  flex: 1;
  font-size: 22px;
  font-weight: 600;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;

  & > * {
    margin-inline: 20px;
  }

  & .avatar {
    align-items: center;
    display: flex;

    & img {
      border-radius: 50%;
      height: 90%;
      width: auto;
    }
  }

  .score-value {
    display: inline-block;
    min-width: 35px;
    text-align: center;
  }
`;

export const PlayerDiv = styled.div`display: flex;
  height: 100%;
  padding: 2px;
  text-align: center;

  .playerName {
    margin-left: 7px;
  }
`;

export const Main = styled.main`margin: 0 auto;
  max-width: 1025px;
`;

export const Question = styled.section`& > * {
    margin: 20px 0 0;
  }
`;

export const QuestionHead = styled.header`background: ${({ theme }) => theme.primary};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.background};
  display: flex;
  flex-flow: nowrap column;
  font-size: 10px;
  padding: 25px;
  position: relative;

  .separation-line { width: 75%;}

  .question-category {
    font-size: 2.8em;
    margin: 0;
    text-align: center;
  }

  .question-txt {
    font-size: 1.8em;
    margin: 10px 0 0;
  }

  .time-counter {
    align-items: center;
    border: 2px solid ${(theme) => theme.background};
    border-radius: 50%;
    display: flex;
    font-size: 20px;
    font-weight: 600;
    height: 40px;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 40px;
  }
`;

export const QuestionForm = styled.form`/* question form */
  border: 3px solid ${({ theme: { primary } }) => primary};
  border-radius: 8px;
  box-sizing: border-box;
  padding: 25px;

  & > * {
    margin: 0 0 10px;
  }
`;

export const RadioContainer = styled.button`/* Customize the label (the container) */
  border: 3px solid transparent;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-size: 22px;
  margin-bottom: 12px;
  padding: 10px;
  position: relative;
  user-select: none;
  width: 100%;


  &.wrong {
    border: 3px solid ${({ theme: { wronganswer } }) => wronganswer};
  }

  &.correct {
    border: 3px solid ${({ theme: { correctanswer } }) => correctanswer};
  }


  /* Hide the browser's default radio button */
  & input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }

  /* Create a custom radio button */
  & .checkmark {
    border: 3px solid ${({ theme: { primary } }) => primary};
    border-radius: 50%;
    box-sizing: border-box;
    height: 25px;
    left: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  & input:checked ~ .checkmark {
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  & .checkmark:after {
    content: '';
    display: none;
    position: absolute;
  }

  /* Show the indicator (dot/circle) when checked */
  & input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  & .checkmark:after {
    background: ${({ theme: { primary } }) => primary};
    border-radius: 50%;
    height: 13px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
  }

  & label {
    color: ${({ theme: { primary } }) => primary};
    cursor: pointer;
    display: block;
    font-weight: 500;
    margin-left: 35px;
  }
`;
