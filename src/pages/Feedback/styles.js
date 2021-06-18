import styled from 'styled-components';

export const MainFeedbackContainer = styled.main`display: flex;
  height: 100%;
  justify-content: center;
`;

export const FeedbackContainer = styled.section`border-radius: 8px;
  display: flex;
  flex-flow: nowrap column;
  height: 420px;
  padding: 35px;
  width: 350px;

  .title {
    color: ${({ theme: { primary } }) => primary};
    font-size: 30px;
    font-weight: 600;
    text-align: center;
  }

  .feedback {
    color: ${({ theme: { primary } }) => primary};
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }

  .div-buttons {
    display: flex;
    justify-content: space-between;

  }
`;

export const Button = styled.button`border: unset;
  border-radius: 6px;
  font-size: 17px;
  font-weight: 600;
  margin-top: 15px;
  padding: 10px 20px;
  transition: background 0.15s ease;
  width: 150px;

  &:hover {
    background: ${({ theme: { playagainvariant } }) => playagainvariant};
    cursor: pointer;
  }

  &.playagain-btn {
    background-color: ${({ theme: { playagain } }) => playagain};
    color: white;
  }

  &.ranking-btn {
    background-color: ${({ theme: { accent } }) => accent};
    color: white;
  }
`;
