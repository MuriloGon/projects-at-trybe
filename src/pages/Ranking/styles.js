import styled from 'styled-components';

const RankingStyle = styled.div`
  .RankingContainer {
    text-align: center;
  }


  li {
    border: 4px solid;
    border-radius: 14px;
    border-color: ${({ theme: { primary } }) => primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    max-width: 95%;
    padding-right: 20px;
    padding-left: 20px;
  }

  .player-position {
    color: ${({ theme: { primary } }) => primary};
    font-size: 30px;
    border: 4px solid;
    border-radius: 48%;
    border-color: ${({ theme: { primary } }) => primary};
    padding-left: 8px;
    padding-right: 8px;
  }

  .playerUsername {
    color: ${({ theme: { primary } }) => primary};
  }

  .playerScore {
    color: ${({ theme: { primaryvariant } }) => primaryvariant};
  }

  img {
    border-radius: 50%;
  }

  h1 {
    color: ${({ theme: { primary } }) => primary};
  }

  .input-goHome {
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    height: 50px;
    width: 130px;
    transition: box-shadow 0.3s ease;
    background-color: ${({ theme: { playagain } }) => playagain};
    color: white;
  }
`;

export default RankingStyle;
