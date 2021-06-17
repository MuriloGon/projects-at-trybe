import styled from 'styled-components';

export const H = styled.header`background-color: ${({ theme: { primary } }) => primary};
  color: white;
  display: flex;
  font-size: 22px;
  font-weight: 600;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;

  .avatar {
    border-radius: 30px;
  }
`;

export const PlayerDiv = styled.div`display: flex;
  margin: 2px;
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

export const RadioContainer = styled.div`/* Customize the label (the container) */
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-size: 22px;
  margin-bottom: 12px;
  padding: 10px;
  position: relative;
  user-select: none;


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
