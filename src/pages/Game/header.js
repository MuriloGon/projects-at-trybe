import React, { useEffect } from 'react'
import md5 from 'crypto-js/md5';
import { useSelector } from 'react-redux';

export default function Header() {
  const email = useSelector((st) => st.login.email);
  const name = useSelector((st) => st.login.userName);
  const score = useSelector((st) => st.game.score);

  const newEmail = md5(email).toString();
  return (
    <>
      <img src={`https://www.gravatar.com/avatar/${newEmail}`} data-testid="header-profile-picture"/>
      <p data-testid="header-player-name">{name}</p>
      <p data-testid="header-score">Score: {score}</p>
    </>
  )
}
