import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentNavigation } from '../../../slices/currentNavigation';

function Perfil() {
  const email = localStorage.getItem('user');
  const dispatch = useDispatch();

  useEffect(() => { dispatch(setCurrentNavigation('profile')); }, []);

  const resetLocalStorage = () => { localStorage.clear(); };
  return (
    <>
      <div>
        <h1
          data-testid="profile-email"
        >
          {email}
        </h1>
      </div>
      <div>
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="profile-done-btn"
          >
            Receitas Feitas
          </button>
        </Link>

        <Link to="/receitas-favoritas">
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Receitas Favoritas
          </button>
        </Link>

        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => resetLocalStorage() }
          >
            Sair
          </button>
        </Link>
      </div>
    </>
  );
}

export default Perfil;
