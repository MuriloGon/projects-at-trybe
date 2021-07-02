import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from '../__tests_helpers__/renderWithRouterAndRedux';
import Login from '../pages/Login';
import App from '../App';

const regex = '^[-a-z0-9~!$%^&*_=+}{\\\'?]+(\\.[-a-z0-9~!$%^&*_=+}{\\\'?]+)'
+ '*@([a-z0-9_][-a-z0-9_]*(\\.[-a-z0-9_]+)*\\.(aero|arpa|biz|com|coop|edu|gov|'
+ 'info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\\.'
+ '[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,5})?$';

const EMAIL_VERIFY_REGEX = new RegExp(regex, 'i');
const VALID_EMAIL = 'test@tst.com';
const VALID_PASSWORD = '1234567';
const INVALID_EMAIL = '1233_.com';
const INVALID_PASSWORD = '1';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const SUBMIT_BTN = 'login-submit-btn';

beforeEach(() => {
  global.sessionStorage.clear();
});

describe('Login page', () => {
  test('must to exist an (email && password) inputs and a login submit button', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASSWORD_INPUT);
    const submitButton = getByTestId(SUBMIT_BTN);

    expect(emailInput).toBeInTheDocument();
    expect(emailInput.getAttribute('type')).toBe('email');

    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.getAttribute('type')).toBe('password');

    expect(submitButton).toBeInTheDocument();
    expect(submitButton.getAttribute('type')).toBe('submit');
  });

  test('email and password inputs must be working', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASSWORD_INPUT);
    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);
    expect(emailInput.value).toBe(VALID_EMAIL);
    expect(passwordInput.value).toBe(VALID_PASSWORD);
  });

  test('The submit button must have a text "Login"', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Login />);
    const loginInput = getByTestId(SUBMIT_BTN);
    expect(loginInput).toHaveTextContent(/login/i);
  });

  test('the email must be in a valid format', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    const submitButton = getByTestId(SUBMIT_BTN);
    const passwordInput = getByTestId(PASSWORD_INPUT);

    userEvent.type(passwordInput, VALID_PASSWORD);
    userEvent.type(emailInput, INVALID_EMAIL);
    expect(EMAIL_VERIFY_REGEX.test(emailInput)).toBe(false);
    expect(submitButton.disabled).toBe(true);

    userEvent.type(emailInput, VALID_EMAIL);
    expect(submitButton.disabled).toBe(false);
  });

  test('the pass must be in a valid format (length >= 6)', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Login />);
    const emailInput = getByTestId('email-input');
    const submitButton = getByTestId(SUBMIT_BTN);
    const passwordInput = getByTestId(PASSWORD_INPUT);

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, INVALID_PASSWORD);
    expect(submitButton.disabled).toBe(true);

    userEvent.type(passwordInput, INVALID_PASSWORD);
    expect(submitButton.disabled).toBe(true);
  });

  test('redirect to /comidas if a valid login is entered', () => {
    const { getByTestId, history } = renderWithRouterAndRedux(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASSWORD_INPUT);
    const submitButton = getByTestId(SUBMIT_BTN);
    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);
    expect(history.location.pathname).toBe('/');
    userEvent.click(submitButton);
    expect(history.location.pathname).toBe('/comidas');
  });

  test('At localStorate, the "mealsToken" & "cocktailsToken" set to 1 (developer token)'
  + 'and "user" set to {email: email@email.com}', () => {
    renderWithRouterAndRedux(<App />);

    const parsedLocalStorage = (key) => (
      JSON.parse(localStorage.getItem(key))
    );

    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const submitButton = screen.getByTestId(SUBMIT_BTN);

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);
    userEvent.click(submitButton);

    const cocktailsTokenReceived = parsedLocalStorage('cocktailsToken');
    const mealsTokenReceived = parsedLocalStorage('mealsToken');
    const userReceived = parsedLocalStorage('user');

    expect(cocktailsTokenReceived).toBe(1);
    expect(mealsTokenReceived).toBe(1);
    expect(userReceived).toEqual({ email: VALID_EMAIL });
  });

  test('after submit the login, the aplication must redirect to /comidas', () => {
    const { getByTestId, history } = renderWithRouterAndRedux(<App />);
    expect(history.location.pathname).toBe('/login');
    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASSWORD_INPUT);
    const submitButton = getByTestId(SUBMIT_BTN);
    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);
    userEvent.click(submitButton);
    expect(history.location.pathname).toBe('/comidas');
  });
});
