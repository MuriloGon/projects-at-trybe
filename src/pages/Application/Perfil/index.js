import React from 'react';
import { Link } from 'react-router-dom';
// import { clearLocalStorage } from '../../../services/localStorage';

function Perfil() {
  const email = localStorage.getItem('user');

  const resetLocalStorage = () => {
    localStorage.clear();
  };
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
