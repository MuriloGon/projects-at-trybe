import React from 'react';
import { getLocalStorage } from '../../helpers/localStorage';

function TopRanking() {
  const three = 3;
  const data = getLocalStorage('ranking');
  const sortScore = data.sort((a, b) => b.score - a.score);
  const newArrayPlayer = sortScore.slice(0, three);
  return (
    <ul>
      { newArrayPlayer.map((info, index) => (
        <li className="listRanking" key={ index }>
          <img src={ info.picture } alt="user" />
          <p data-testid={ `player-name-${index}` }>{ info.name }</p>
          <span data-testid={ `player-score-${index}` }>{ info.score }</span>
          { index }
        </li>
      )) }
    </ul>
  );
}

export default TopRanking;
