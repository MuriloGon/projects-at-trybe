import styled from 'styled-components';
import { common } from './globalStyles';

export const teste = 10;

export const Main = styled.main`
  margin: 0 auto;
  max-width: ${`${common.maxWidth}`};
  padding: 0.25rem;
  position: relative;
  ul {
    margin: 0;
  }
`;
