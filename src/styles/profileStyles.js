import styled from 'styled-components';
import { primary1 } from './theme';

export const ProfileContainer = styled.div` /* ProfileContainer */
`;

ProfileContainer.Content = styled.div` /* ProfileContainer.Content */
  margin: 0 auto;
  max-width: 800px;
`;

export const ProfileTitle = styled.h1`/* ProfileTitle */
  color: ${primary1};
  font-size: 24px;
  font-weight: 800;
  margin-block: 20px;
  text-align: center;
`;

export const ProfileButtons = styled.div`/* ProfileTitle */
  display: flex;
  flex-flow: nowrap column;
  margin-top: 50px;
  text-align: center;

  & > * {
    margin: 5px auto;
    max-width: 350px;
    min-width: 300px;
  }

  button {
    height: 50px;
    width: 100%;
  }
`;
