import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../slices/auth';
import { setCocktailsToken } from '../slices/cocktailsToken';
import { setMealsToken } from '../slices/mealsToken';
import { setUser } from '../slices/user';

const MIN_LENGTH = 6;
const regex = '^[-a-z0-9~!$%^&*_=+}{\\\'?]+(\\.[-a-z0-9~!$%^&*_=+}{\\\'?]+)'
+ '*@([a-z0-9_][-a-z0-9_]*(\\.[-a-z0-9_]+)*\\.(aero|arpa|biz|com|coop|edu|gov|'
+ 'info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\\.'
+ '[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,5})?$';
const EMAIL_VERIFY_REGEX = new RegExp(regex, 'i');

const validateForm = (email, password) => (
  (EMAIL_VERIFY_REGEX.test(email) && password.length > MIN_LENGTH)
);

const handleChange = (setValue) => ({ target: { value } }) => { setValue(value); };

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const disabled = !validateForm(email, password);
  const handleSubmit = (e) => {
    const allowSubmit = !disabled;
    e.preventDefault();
    if (allowSubmit) {
      dispatch(setMealsToken(1));
      dispatch(setCocktailsToken(1));
      dispatch(setUser(email));
      dispatch(loginUser());
      setRedirect(true);
    }
  };

  if (redirect) return <Redirect to="/comidas" />;
  return (
    <form onSubmit={ handleSubmit }>
      <input
        data-testid="email-input"
        value={ email }
        onChange={ handleChange(setEmail) }
        type="email"
        placeholder="Email"
      />
      <input
        data-testid="password-input"
        value={ password }
        onChange={ handleChange(setPassword) }
        type="password"
        placeholder="Password"
      />
      <button
        data-testid="login-submit-btn"
        type="submit"
        disabled={ disabled }
      >
        Login
      </button>
    </form>
  );
}

export default Login;
