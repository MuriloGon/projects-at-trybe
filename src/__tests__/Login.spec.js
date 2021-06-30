import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../pages/Login';

const EMAIL_VERIFY_REGEX = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

const VALID_EMAIL = 'test@tst.com';
const VALID_PASSWORD = '1234567';
const INVALID_EMAIL = '1233_.com';
const INVALID_PASSWORD = '1';

describe('Login page', () => {
  test('must to exist an (email && password) inputs and a login submit button', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const submitButton = getByTestId('login-submit-btn');

    expect(emailInput).toBeInTheDocument();
    expect(emailInput.getAttribute('type')).toBe('email');

    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.getAttribute('type')).toBe('password');

    expect(submitButton).toBeInTheDocument();
    expect(submitButton.getAttribute('type')).toBe('submit');
  });

  test('The submit button must have a text "Login"', () => {
    const { getByTestId } = render(<Login />);
    const loginInput = getByTestId('login-submit-btn');
    expect(loginInput).toHaveTextContent(/login/i);
  });

  test('the email must be in a valid format', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId('email-input');
    const submitButton = getByTestId('login-submit-btn');
    const passwordInput = getByTestId('password-input');

    fireEvent.change(emailInput, { target: { value: INVALID_EMAIL } });
    expect(submitButton.getAttribute('disabled')).toBe(false);

    fireEvent.change(passwordInput, { target: { value: VALID_EMAIL } });
    expect(submitButton.getAttribute('disabled')).toBe(false);
  });
});
