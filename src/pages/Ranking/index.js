import React from 'react';
import { Link } from 'react-router-dom';
import getLocalStorage from '../../helpers/localStorage';
import RankingStyle from './styles';

export default function Ranking() {
  const three = 3;
  const data = getLocalStorage('ranking');
  const sortScore = data.sort((a, b) => b.score - a.score);
  const TopPlayers = sortScore.slice(0, three);
  const LowerPlayers = sortScore.slice(three, sortScore.length);
  const rankingArray = [...TopPlayers, ...LowerPlayers];
  console.log(rankingArray);
  return (
    <RankingStyle>
      <div className="RankingContainer">
        <h1 data-testid="ranking-title">Ranking</h1>
        <ul>
          { rankingArray.map((info, index) => (
            <li className="listRanking" key={ index }>
              <img src={ info.picture } alt="user" />
              <p
                data-testid={ `player-name-${index}` }
                className="playerUsername"
              >
                { info.name }
              </p>
              <span
                data-testid={ `player-score-${index}` }
                className="playerScore"
              >
                { info.score }
              </span>
              <p className="player-position">{ index }</p>
            </li>
          )) }
        </ul>
        <Link to="/login">
          <input
            className="input-goHome"
            value="Play Again"
            data-testid="btn-go-home"
            type="button"
          />
        </Link>
      </div>
    </RankingStyle>
  );
}
