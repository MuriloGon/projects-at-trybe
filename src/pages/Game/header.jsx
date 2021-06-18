import React from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { H, PlayerDiv } from './styles';

export default function Header({ testId }) {
  const email = useSelector((st) => st.login.email);
  const name = useSelector((st) => st.login.userName);
  const score = useSelector((st) => st.game.score);
  const newEmail = md5(email).toString();

  return (
    <H>
      <PlayerDiv>
        <img
          src={ `https://www.gravatar.com/avatar/${newEmail}` }
          alt="avatar"
          data-testid="header-profile-picture"
          className="avatar"
        />
        <p className="playerName" data-testid="header-player-name">{name}</p>
      </PlayerDiv>
      <div>
        Score:
        <span data-testid={ testId }>{score}</span>
      </div>
    </H>
  );
}

Header.propTypes = {
  testId: PropTypes.string.isRequired,
};
