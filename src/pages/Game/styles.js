import styled from 'styled-components';

export const H = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background-color: ${({ theme: { primary } }) => primary};
  margin: 0px;
  padding: 0px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  color: white;

  .avatar {
    border-radius: 30px;
  }
`;

export const PlayerDiv = styled.div`
  display: flex;
  padding: 2px;
  margin: 2px;
  text-align: center;

  .playerName {
    margin-left: 7px;
  }
`;
