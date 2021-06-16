import styled from 'styled-components';

export const MainContainer = styled.main`align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const LoginContainer = styled.section`border-radius: 8px;
  box-shadow: 0 4px 25px rgba(0 0 0 / 25%);
  display: flex;
  flex-flow: nowrap column;
  height: 350px;
  padding: 35px;
  width: 350px;

  .login-title {
    color: ${({ theme: { primary } }) => primary};
    font-size: 30px;
    font-weight: 600;
    text-align: center;

    h1 {
      margin-block: 1.5rem;
    }
  }

  .login-form {
    display: flex;
    flex: 1;
    flex-flow: nowrap column;
    justify-content: space-between;

    & > * > * {
      margin-top: 30px;
    }

    .form-buttons {
      display: flex;
      justify-content: space-between;

      & > * {
        flex: 1;
      }
    }
  }

`;

export const Input = styled.input`border: 3px solid 
${({ theme: { primary } }) => primary};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${({ theme: { primary } }) => primary};
  font-size: 20px;
  font-weight: 500;
  height: 50px;
  padding: 8px;
  width: 100%;

  &:focus {
    background-color: ${({ theme: { primarylight } }) => primarylight};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme: { primarydisabled } }) => primarydisabled};
  }
`;

export const Button = styled.button`border: none;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  height: 50px;
  max-width: 150px;
  transition: box-shadow 0.3s ease;

  &.accent-btn {
    background-color: transparent;
    border: 3px solid ${({ theme: { accent } }) => accent};
    color: ${({ theme: { accent } }) => accent};

  }

  &.primary-btn {
    background-color: ${({ theme: { primary } }) => primary};
    color: white;
  }

  &:hover {
    box-shadow: 0 5px 12px 4px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: ${({ theme: { primarydisabled } }) => primarydisabled};
    cursor: not-allowed;
  }
`;
