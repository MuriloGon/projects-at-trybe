import React from 'react';

import { userInfo, setLocalStorage, getLocalStorage } from '../../helpers/localStorage';

function getScore() {
  setLocalStorage('ranking', userInfo);
}
getScore();

function LowerRanking() {
  const three = 3;
  const data = getLocalStorage('ranking');
  const sortScore = data.sort((a, b) => b.score - a.score);
  const LowerPlayers = sortScore.slice(three, sortScore.length);
  return (
    <ul>
      { LowerPlayers.map((info, index) => (
        <li className="listRanking" key={ index }>
          <img src={ info.picture } alt="user" />
          <p>{ info.name }</p>
          <span>{ info.score }</span>
          { index }
        </li>
      )) }
    </ul>
  );
}

export default LowerRanking;
