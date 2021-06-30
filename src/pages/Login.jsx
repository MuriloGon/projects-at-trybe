import React, { useState } from 'react';

function Login() {
  useState('');
  return (
    <form>
      <input data-testid="email-input" type="email" placeholder="Email" />
      <input data-testid="password-input" type="password" placeholder="Password" />
      <button data-testid="login-submit-btn" type="submit">Login</button>
    </form>
  );
}

export default Login;
