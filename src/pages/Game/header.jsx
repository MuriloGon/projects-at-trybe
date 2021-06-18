import React, { useEffect } from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { H, PlayerDiv } from './styles';
import { setAvatar } from '../../slices/loginSlice';

export default function Header({ testId }) {
  const email = useSelector((st) => st.login.email);
  const name = useSelector((st) => st.login.userName);
  const score = useSelector((st) => st.game.score);
  const dispatch = useDispatch();
  const newEmail = md5(email).toString();

  useEffect(() => {
    dispatch(setAvatar(`https://www.gravatar.com/avatar/${newEmail}`));
  }, []);

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
