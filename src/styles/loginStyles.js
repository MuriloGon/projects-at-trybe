import styled from 'styled-components';
import { primary1 } from './theme';

export const LoginContainer = styled.main`/* Login Container */
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

`;

LoginContainer.FormWrapper = styled.div`/* FormWrapper */
  max-width: 250px;

  & > * {
    margin-bottom: 20px;
  }
`;

LoginContainer.Title = styled.h1`/* Title */
  color: ${primary1};
  font-family: Cookie , cursive;
  font-size: 65px;
  font-weight: 500;
  text-align: center;
`;

LoginContainer.Logo = styled.div` /* Logo */
  color: ${primary1};

  img {
    width: 100%;
  }
`;

export const LoginForm = styled.form`/* Login Form */
  align-items: center;
  display: flex;
  flex-flow: nowrap column;

  & > * {
    margin-bottom: 20px;
  }
`;
