/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '../../../services/localStorage';
import { setCurrentNavigation } from '../../../slices/currentNavigation';
import { ProfileContainer, ProfileTitle,
  ProfileButtons } from '../../../styles/profileStyles';
import { GradientButton } from '../../../styles/genericComps';

function Perfil() {
  const { email } = getLocalStorage('user');
  const dispatch = useDispatch();

  useEffect(() => { dispatch(setCurrentNavigation('profile')); }, []);

  const resetLocalStorage = () => { localStorage.clear(); };
  return (
    <ProfileContainer>
      <ProfileContainer.Content>
        <ProfileTitle
          data-testid="profile-email"
        >
          User:
          {' '}
          {email}
        </ProfileTitle>
        <ProfileButtons>
          <Link to="/receitas-feitas">
            <GradientButton
              type="button"
              data-testid="profile-done-btn"
            >
              Receitas Feitas
            </GradientButton>
          </Link>

          <Link to="/receitas-favoritas">
            <GradientButton
              type="button"
              data-testid="profile-favorite-btn"
            >
              Receitas Favoritas
            </GradientButton>
          </Link>

          <Link to="/">
            <GradientButton
              style={ { background: 'tomato' } }
              type="button"
              data-testid="profile-logout-btn"
              onClick={ () => resetLocalStorage() }
            >
              Sair
            </GradientButton>
          </Link>
        </ProfileButtons>
      </ProfileContainer.Content>
    </ProfileContainer>
  );
}

export default Perfil;
