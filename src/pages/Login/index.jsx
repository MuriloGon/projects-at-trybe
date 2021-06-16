import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { fetchTokenThunk } from '../../slices/gameSlice';
import { setUserEmail, setUserName } from '../../slices/loginSlice';
import { Button, Input, LoginContainer, MainContainer } from './styles';

const loginValidation = (email, name) => {
  if (email === '' && name === '') return true;
  if ((email !== '' && name === '')
  || (email === '' && name !== '')) return true;
  return false;
};

// eslint-disable-next-line max-lines-per-function
const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [redirectSettings, setRedirectSettings] = useState(false);
  const dispatch = useDispatch();
  const allowRedirect = useSelector((st) => st.game.allowRedirect);
  const token = useSelector((st) => st.game.token);

  useEffect(() => {
    const tokenFromLS = localStorage.getItem('token');

    if (tokenFromLS === '' || tokenFromLS === null) localStorage.setItem('token', token);
  }, [token]);

  if (allowRedirect) return <Redirect to="/game" />;
  if (redirectSettings) return <Redirect to="/settings" />;
  return (
    <MainContainer>
      <LoginContainer>
        <div className="login-title">
          <h1>LOGIN</h1>
        </div>
        <form className="login-form">
          <div className="form-inputs">
            <Input
              data-testid="input-gravatar-email"
              type="email"
              placeholder="Email"
              value={ email }
              onChange={ ({ target: { value } }) => { setEmail(value); } }
            />
            <Input
              data-testid="input-player-name"
              type="text"
              placeholder="Name"
              value={ name }
              onChange={ ({ target: { value } }) => { setName(value); } }
            />
          </div>
          <div className="form-buttons">
            <Button
              data-testid="btn-settings"
              className="accent-btn"
              type="button"
              onClick={ () => { setRedirectSettings(true); } }
            >
              Config
            </Button>
            <Button
              data-testid="btn-play"
              className="primary-btn"
              type="button"
              disabled={ loginValidation(email, name) }
              onClick={ () => {
                dispatch(fetchTokenThunk());
                dispatch(setUserEmail(email));
                dispatch(setUserName(name));
              } }
            >
              Jogar
            </Button>
          </div>
        </form>
      </LoginContainer>
    </MainContainer>
  );
};

export default Login;
