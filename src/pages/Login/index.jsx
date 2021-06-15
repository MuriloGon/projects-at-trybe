import React, { useState } from 'react';
import { Button, Input, LoginContainer, MainContainer } from './styles';

const loginValidation = (email, name) => {
  if (email === '' && name === '') return true;
  if ((email !== '' && name === '')
  || (email === '' && name !== '')) return true;
  return false;
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

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
            <Button className="accent-btn" type="button">Config</Button>
            <Button
              data-testid="btn-play"
              className="primary-btn"
              type="button"
              disabled={ loginValidation(email, name) }
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
